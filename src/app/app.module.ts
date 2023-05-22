import { NgModule } from '@angular/core';
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
    //provideAuth(() => getAuth()),
    //provideDatabase(( => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
