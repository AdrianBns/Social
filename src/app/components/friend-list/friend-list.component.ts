import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-page/user-service.service';
import { Persona } from 'src/shared/user.model';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  @Input() persona: Persona;

  constructor(private userService: UserServiceService) {

    this.persona = new Persona();

  }

  ngOnInit(): void {
     this.userService.getUser(1).subscribe(
       data => this.persona = data
     );
  }

}
