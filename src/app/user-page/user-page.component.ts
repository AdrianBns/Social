
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
  personaPerfil: Persona = new Persona();
  datoUsuario: Persona;
  key: string = 'usuario';

  constructor(private userService: UserServiceService) {
     this.persona = JSON.parse(localStorage.getItem(this.key)!);





    }

  ngOnInit(): void {






  }

  loadUser(id:number){
    return this.userService.getUser(id)
      .subscribe((data: Persona) => {
        this.persona = data
      })
  }

  sendUserMessage(persona: Persona){
    this.userService.sendUserMsg(persona)
      .subscribe(data => this.loadUser(data.id));
  }


}
