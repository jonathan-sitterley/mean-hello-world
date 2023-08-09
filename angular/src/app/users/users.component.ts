import { Component } from '@angular/core';

import { UserService } from '../services/user.service';
import { User, IUser } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public userInput: User = new User("","","");
  public users: IUser[] = [];

  constructor(private userService: UserService) {}


  resetUsers() {
    let result = "";
    console.log(this.userService.resetUsers().subscribe((response: any) => {
      result = response;
      console.log(result);
    }));
    this.getUsers();
  }

  createUser() {
    let newUser = new User(this.userInput.firstName, this.userInput.lastName, this.userInput.email)
    console.log('Create new user: ' + JSON.stringify(newUser));
    console.log(this.userService.createUser(newUser).subscribe((response: any) => {
      let result = response;
      console.log(result);
    }));
    this.getUsers();
  }

  updateUser() {
    let updateUser = new User(this.userInput.firstName, this.userInput.lastName, this.userInput.email)
    console.log('Update user: ' + JSON.stringify(updateUser));
    console.log(this.userService.updateUser(updateUser).subscribe((response: any) => {
      let result = response;
      console.log(result);
    }));
    this.getUsers();
  }

  deleteUser() {
    let deleteUser = new User(this.userInput.firstName, this.userInput.lastName, this.userInput.email)
    console.log('Delete user: ' + JSON.stringify(deleteUser));
    console.log(this.userService.deleteUser(deleteUser).subscribe((response: any) => {
      let result = response;
      console.log(result);
    }));
    this.getUsers();
  }

  getUsers() {
    console.log(this.userService.getUsers().subscribe(users => {
      this.users = users;
    }));
  }

}
