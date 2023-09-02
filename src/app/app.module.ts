import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { NotesComponent } from './notes/notes.component';


import { environment } from '../environments/environment';


/*const environment = {

  production: false,
  firebase: {
    projectId: 'sezgintodo62',
    appId: '1:42286061389:web:e13398e7aa4dcc218b0904',
    databaseURL: 'https://sezgintodo62-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'sezgintodo62.appspot.com',
    apiKey: 'AIzaSyBRq0SDl0dD4sW5h0nRnkwgEZc9ZEQxaqk',
    authDomain: 'sezgintodo62.firebaseapp.com',
    messagingSenderId: '42286061389',
  }
};*/
 

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    FormsModule,
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
