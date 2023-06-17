import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../script.service';
import { Firestore, collection, getDocs, query } from '@angular/fire/firestore';
import { inject } from '@angular/core';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  
  firestore: Firestore = inject(Firestore);


constructor(public fs: ScriptService) {
  
}





}
