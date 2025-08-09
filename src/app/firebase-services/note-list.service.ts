import { AsyncPipe } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { Note } from './../interfaces/note.interface';
 
@Injectable({
  providedIn: 'root'
})
  
export class NoteListService {


  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  unsubNotes;
  unsubTrash;



  firestore: Firestore = inject(Firestore);
  itemCollection = collection(this.firestore, 'items');

  

  constructor() { 

    this.unsubTrash = this.subTrashList();
    this.unsubNotes = this.subNotesList();
    
  }

  setNoteObject(obj: any, id: string): Note {
    return {
      id: id || "",
      type: obj.type || "",
      title: obj.title || "",
      content: obj.content || "",
      marked: obj.marked || false,
    }
  }
  
  ngonDestroy() {
    this.unsubNotes();
    this.unsubTrash();
  }

  subTrashList() {
    return onSnapshot(this.getTrashRef(), (list) => {
      this.trashNotes = [];
      list.forEach(element => {
        this.trashNotes.push(this.setNoteObject(element.data(), element.id));
      })
    })
  }

  subNotesList() {
    return onSnapshot(this.getNotesRef(), (list) => {
      this.normalNotes = [];
      list.forEach(element => {
        this.normalNotes.push(this.setNoteObject(element.data(), element.id));
      })
    })
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
