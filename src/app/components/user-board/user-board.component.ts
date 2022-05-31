import { messages } from './../../../shared/messages.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/shared/user.model';


@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.scss']
})
export class UserBoardComponent implements OnInit {
  @Input() persona:Persona;
  userMessage: messages;
  @Output() emitUserMsg: EventEmitter<Persona> = new EventEmitter<Persona>();
  date: Date;
  constructor() { }


  ngOnInit(): void {
    this.date = new Date();
    this.userMessage = new messages();
  }

  sendEmitUserMsg(msg: string){
    this.userMessage.body = msg;
    this.userMessage.author = this.persona.id;
    this.userMessage.date = this.date.toLocaleDateString();
    this.persona.mensajes.push(this.userMessage);

    this.emitUserMsg.emit(this.persona);

  }

}
