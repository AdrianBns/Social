import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/shared/user.model';

@Component({
  selector: 'app-user-messages-board',
  templateUrl: './user-messages-board.component.html',
  styleUrls: ['./user-messages-board.component.scss']
})
export class UserMessagesBoardComponent implements OnInit {

  @Input() persona: Persona;
  @Input() i: number;
  constructor() { }

  ngOnInit(): void {
  }

}
