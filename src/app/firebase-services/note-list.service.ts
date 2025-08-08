import { AsyncPipe } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
  
export class NoteListService {

  firestore: Firestore = inject(Firestore);
  itemCollection = collection(this.firestore, 'items');
  
  item$;
  constructor() { 
    this.item$ = collectionData(this.getNotesRef());
  }

  getNotesRef() {
    return collection(this.firestore, 'notes');
  }

  getTrashRef() {
    return collection(this.firestore, 'trash');
  }

  getSingleDocref(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}
