import { Component } from '@angular/core';
import { ScriptService } from '../script.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

constructor(public fs: ScriptService) {

}

}
