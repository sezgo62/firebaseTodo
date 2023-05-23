import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initializeApp } from '@angular/fire/app';
//import { firebaseConfig } from './environments/environment.development';

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


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

 

  
