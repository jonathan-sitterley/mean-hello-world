import { Component } from '@angular/core';

import { UserService } from '../services/user.service';
import { User, IUser } from '../models/user';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public userInput: User = new User("","","");
  public users: IUser[] = [];

  constructor(private userService: UserService,
              public notificationService: NotificationService,
              ) {}


  resetUsers() {
    let result = "";
    this.notificationService.spinner();
    this.userService.resetUsers(this.notificationService).subscribe((response: any) => {
      this.getUsers();
    });
  }

  createUser() {
    this.notificationService.spinner();
    let newUser = new User(this.userInput.firstName, this.userInput.lastName, this.userInput.email)
    console.log('Create new user: ' + JSON.stringify(newUser));
    this.userService.createUser(newUser, this.notificationService).subscribe((response: any) => {
      this.getUsers();
    });

  }

  updateUser() {
    this.notificationService.spinner();
    let updateUser = new User(this.userInput.firstName, this.userInput.lastName, this.userInput.email)
    console.log('Update user: ' + JSON.stringify(updateUser));
    this.userService.updateUser(updateUser, this.notificationService).subscribe((response: any) => {
      this.getUsers();
    });
  }

  deleteUser() {
    this.notificationService.spinner();
    let deleteUser = new User(this.userInput.firstName, this.userInput.lastName, this.userInput.email)
    console.log('Delete user: ' + JSON.stringify(deleteUser));
    this.userService.deleteUser(deleteUser, this.notificationService).subscribe((response: any) => {
      this.getUsers();
    });
  }

  getUsers() {
    console.log(this.userService.getUsers(this.notificationService).subscribe(users => {
      this.users = users;
    }));
  }

}
