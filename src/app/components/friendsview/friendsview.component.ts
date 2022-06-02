import { UserServiceService } from 'src/app/user-page/user-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/shared/user.model';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-friendsview',
  templateUrl: './friendsview.component.html',
  styleUrls: ['./friendsview.component.scss']
})
export class FriendsviewComponent implements OnInit {

  @Input() persona:Persona;
  personas: Array<Persona>
  friends: Array<Persona>
  notFriends: Array<Persona>

  constructor(private userService: UserServiceService) {
    this.personas = new Array();
    this.friends = new Array();
    this.notFriends = new Array();
   }

  ngOnInit(): void {


    this.showNewFriends(this.persona);


  }

  showNewFriends(persona: Persona){

    for(let i = 0; i < persona.amigos.length; i++ ){
      this.friends.push(persona.amigos[i])

    }
    this.friends.push(this.persona);

    this.userService.getUsers().subscribe(data =>{
      this.personas = data;

    this.notFriends = this.personas.filter( persona =>
      !this.friends.some(amigo =>
        persona.id == amigo.id)
    )
  //Esta función filtra por los que no son false. .some() retorna true o false si hay alguno igual dentro. En este caso, retorna un false
  // cada vez que encuentra alguien que coincide con la id, por lo que lo elimina del filtro y pasa solo los true
 })}

 /*var uniqueResultOne = result1.filter(function(obj) {
  return !result2.some(function(obj2) {
      return obj.value == obj2.value;
  });
});*/
//et usuariosQueNoSonTusAmigos = this.usuariosList.filter( usuario => this.contactosList.findIndex( contacto => contacto.usuario.................................


}
