import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../test.users';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = signal(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]) // to get a random

  imagePath = computed(() => this.selectedUser().avatar)

  // get imagePath(){
  //   return this.selectedUser.avatar; --> This is used when using zone.js (state management without signals)
  // }

  altText = computed(() => this.selectedUser().name);

  // get altText(){
  //   return this.selectedUser.name;
  // }

  onClickUser(){
      this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)] );

  }
}
