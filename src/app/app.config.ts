// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLD6t9_IXWRj0n81bmbSvZI-_Gr82gajY",
  authDomain: "danotes-32a27.firebaseapp.com",
  projectId: "danotes-32a27",
  storageBucket: "danotes-32a27.firebasestorage.app",
  messagingSenderId: "574570580876",
  appId: "1:574570580876:web:8faceccc6f8c713944a4a9"
};


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};