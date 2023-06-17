import { Component } from '@angular/core';

import { RestUtilityService } from '../services/rest-utility.service';
import { UserService } from '../services/user.service';
import { User, IUser } from '../models/user';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.css']
})
export class MongoComponent {

  public userInput: User = new User("","","");
  public users: IUser[] = [];

  constructor(private restUtilityService: RestUtilityService, private userService: UserService) {}


  resetCollections() {
    let result = "";
    console.log(this.restUtilityService.resetCollections().subscribe((response: any) => {
      result = response;
      console.log(result);
    }));
  }

  createUser() {
    let newUser = new User(this.userInput.firstName, this.userInput.lastName, this.userInput.email)
    console.log('Create new user: ' + JSON.stringify(newUser));
    console.log(this.restUtilityService.createUser(newUser).subscribe((response: any) => {
      let result = response;
      console.log(result);
    }));
  }

  updateUser() {
    let updateUser = new User(this.userInput.firstName, this.userInput.lastName, this.userInput.email)
    console.log('Update user: ' + JSON.stringify(updateUser));
    console.log(this.restUtilityService.updateUser(updateUser).subscribe((response: any) => {
      let result = response;
      console.log(result);
    }));
  }

  deleteUser() {
    let deleteUser = new User(this.userInput.firstName, this.userInput.lastName, this.userInput.email)
    console.log('Delete user: ' + JSON.stringify(deleteUser));
    console.log(this.restUtilityService.deleteUser(deleteUser).subscribe((response: any) => {
      let result = response;
      console.log(result);
    }));
  }

  getUsers() {
    console.log(this.userService.getUsers().subscribe(users => {
      this.users = users;
    }));
  }

}