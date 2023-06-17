import { Injectable, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, query, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getFirestore, deleteDoc } from "firebase/firestore";
import { initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScriptService implements OnInit {

 todotext = '';
 tododescription = '';

  todos$: Observable<any>; // In unserer todos Variable haben wir Observable, was bedeutet dass unsere Variable observiert wird, 
  //und wenn es Änderungen gibt werden wir darüber in Kenntnis gesetzt. Das any bezieht sich auf einen Datentypen, wie string oder number.
  // In diesem Fall haben wir any, was für irgendeins stehen könnte. Das Dolarzeichen nach unserer Variable ist ein Merkmal für eine Variable die sich ändert.
  
todos:Array<any>;

  firestore: Firestore = inject(Firestore); // Wir importieren Firestore, dadurch haben wir Zugang zu sehr vielen Funktionen die wir verwenden können.

newTodos;

 constructor() {
    const itemCollection = collection(this.firestore, 'todos'); // Hier wollen wir die gesammte collection(Sammlung) haben die wir uns im Firestore eingerichtet haben. 
                                                               //In diesem Fall die collection 'todos'.
    this.todos$ = collectionData(itemCollection); //Aus dieser collection holen wir uns die ganzen Daten.

    


    this.todos$.subscribe( (newTodos) => {
      //console.log('Neue todos sind', newTodos);
      this.newTodos = newTodos;
      debugger;
      //this.todos = newTodos;
      });
      //console.log(this.todos$);

      this.ngOnInit();
  }

  
  async ngOnInit() {
    debugger;
    const itemCollection = collection(this.firestore, 'todos'); //Hier wollen wir die gesammte collection(Sammlung) haben die wir uns im Firestore eingerichtet haben. 
                                                                //In diesem Fall die collection 'todos'.
    const q = query(itemCollection);
    const querySnapshot = await getDocs(q);

    debugger;
    console.log(querySnapshot);
    debugger;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }

  addTodo(){
    const itemCollection = collection(this.firestore, 'todos');//Wir holen uns zuerst unsere Collection

    
    setDoc(doc(itemCollection), {
      "todo": this.todotext,
      "description": this.tododescription
    });//Mit dieser Zeile fügen wir dem collection etwas neues hinzu
  }

  deleteNotice(note) {
    const itemCollection = collection(this.firestore, 'todos');
    debugger;
    console.log('Neue todos sind', this.newTodos);
    deleteDoc(doc(itemCollection, note));
    
  }
}
