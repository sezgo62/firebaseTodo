import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initializeApp } from '@angular/fire/app';
//import { firebaseConfig } from './environments/environment.development';



/*const firebaseConfig = {
  apiKey: "AIzaSyBRq0SDl0dD4sW5h0nRnkwgEZc9ZEQxaqk",
  authDomain: "sezgintodo62.firebaseapp.com",
  databaseURL: "https://sezgintodo62-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sezgintodo62",
  storageBucket: "sezgintodo62.appspot.com",
  messagingSenderId: "42286061389",
  appId: "1:42286061389:web:e13398e7aa4dcc218b0904"
};




const app = initializeApp(firebaseConfig);*/


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

 

  
