/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp()),
    provideAuth(() => getAuth()),
    provideDatabase(( => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/




import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
//import { environment } from '../environments/environment';



const firebaseConfig = {
  apiKey: "AIzaSyBRq0SDl0dD4sW5h0nRnkwgEZc9ZEQxaqk",
  authDomain: "sezgintodo62.firebaseapp.com",
  projectId: "sezgintodo62",
  storageBucket: "sezgintodo62.appspot.com",
  messagingSenderId: "42286061389",
  appId: "1:42286061389:web:e13398e7aa4dcc218b0904"
};

const app = initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule
    ],
  providers: [
    
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
