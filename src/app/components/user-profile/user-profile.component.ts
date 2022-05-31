import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/shared/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() persona:Persona;
  constructor() {
    this.persona = new Persona();
  }

  ngOnInit(): void {

  }

}
