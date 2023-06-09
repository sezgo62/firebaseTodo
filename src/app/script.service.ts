import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getFirestore, deleteDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

 todotext = '';
 tododescription = '';

  todos$: Observable<any>; // In unserer todos Variable haben wir Observable, was bedeutet dass unsere Variable observiert wird, 
  //und wenn es Änderungen gibt werden wir darüber in Kenntnis gesetzt. Das any bezieht sich auf einen Datentypen, wie string oder number.
  // In diesem Fall haben wir any, was für irgendeins stehen könnte. Das Dolarzeichen nach unserer Variable ist ein Merkmal für eine Variable die sich ändert.
  
//todos:Array<any>;

  firestore: Firestore = inject(Firestore); // Wir importieren Firestore, dadurch haben wir Zugang zu sehr vielen Funktionen die wir verwenden können.

  constructor() {
    const itemCollection = collection(this.firestore, 'todos'); // Hier wollen wir die gesammte collection(Sammlung) haben die wir uns im Firestore eingerichtet haben. 
                                                                //In diesem Fall die collection 'todos'.
    
    this.todos$ = collectionData(itemCollection); // Aus dieser collection holen wir uns die ganzen Daten.


    this.todos$.subscribe( (newTodos) => {
      console.log('Neue todos sind', newTodos);
      //this.todos = newTodos;
      });
      console.log(this.todos$);
  }


  addTodo(){
    const itemCollection = collection(this.firestore, 'todos');//Wir holen uns zuerst unsere Collection
    setDoc(doc(itemCollection), {
      "todo": this.todotext,
      "description": this.tododescription
    });//Mit dieser Zeile fügen wir dem collection etwas neues hinzu
  }

  deleteNotice() {
    //const itemCollection = collection(this.firestore, 'todos');
    const db = getFirestore();
  }

}
