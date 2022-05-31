import { UserServiceService } from './user-service.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/shared/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  persona: Persona = new Persona();



  constructor(private userService: UserServiceService) {

  }

  ngOnInit(): void {



    this.loadUser();




  }
  loadUser(){
    return this.userService.getUser(1)
      .subscribe(data => this.persona = data)
  }


  sendUserMessage(persona: Persona){
    this.userService.sendUserMsg(persona)
      .subscribe(data => this.loadUser);
  }

}
