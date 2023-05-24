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
  apiKey: "AIzaSyBiqNvNmtZ5Q7XtkUvaxSL2t5u0j1QBPCM",
  authDomain: "sgtodolist-3d985.firebaseapp.com",
  projectId: "sgtodolist-3d985",
  storageBucket: "sgtodolist-3d985.appspot.com",
  messagingSenderId: "538006938300",
  appId: "1:538006938300:web:43cda0c5476b55285866b9",
  measurementId: "G-GHQ6ZFYLCS"
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
