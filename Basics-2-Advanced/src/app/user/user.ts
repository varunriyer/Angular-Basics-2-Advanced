import { Component } from '@angular/core';
import { DUMMY_USERS } from '../test.users';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)] // to get a random

  get imagePath(){
    return this.selectedUser.avatar;
  }

  get altText(){
    return this.selectedUser.name;
  }
}
