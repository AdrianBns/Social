import { FriendListComponent } from './components/friend-list/friend-list.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserServiceService } from './user-page/user-service.service';
import { UserBoardComponent } from './components/user-board/user-board.component';
import { UserMessagesBoardComponent } from './components/user-messages-board/user-messages-board.component';
import { UserFriendsComponent } from './components/user-friends/user-friends.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserPageComponent,
    UserBoardComponent,
    UserMessagesBoardComponent,
    UserFriendsComponent,
    AppNavBarComponent,
    FriendListComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   HttpClientModule,
   AppRoutingModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
