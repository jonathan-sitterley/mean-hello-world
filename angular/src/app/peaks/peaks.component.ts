import { Component, OnInit } from '@angular/core';

import { PeakService } from '../services/peak.service';
import { UserService } from '../services/user.service';
import { Peak } from '../models/peak';
import { IUser, User } from '../models/user';

@Component({
  selector: 'app-peaks',
  templateUrl: './peaks.component.html',
  styleUrls: ['./peaks.component.css']
})
export class PeaksComponent implements OnInit {

  public peaks: Peak[] = [];
  public peakRank!: number;
  public users: IUser[] = [];
  public selectedUser!: IUser;

  constructor(private peakService: PeakService, 
              private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getPeaks() {
    console.log(this.peakService.getPeaks().subscribe(peaks => {
      this.peaks = peaks;
    }));
  }

  getPeakByRank() {
    console.log(this.peakService.getPeakByRank(this.peakRank).subscribe(peaks => {
      this.peaks = peaks;
    }));
  }

  getUsers() {
    console.log(this.userService.getUsers().subscribe(users => {
      this.users = users;
    }));
  }

  updateUser() {
    console.log('Update user: ' + JSON.stringify(this.selectedUser));
    console.log(this.userService.updateUser(this.selectedUser).subscribe((response: any) => {
      let result = response;
      console.log(result);
    }));
  }

  userCheckbox(rank: number) {
    if (this.selectedUser.fourteenerArray.includes(rank)) {
      return true
    } else {
      return false
    }
  }

  updatePeakArray(rank: number){
    if (this.selectedUser.fourteenerArray.includes(rank)) {
      let index = this.selectedUser.fourteenerArray.indexOf(rank)
      this.selectedUser.fourteenerArray.splice(index,1)
    } else {
      this.selectedUser.fourteenerArray.push(rank)
    }
  }

  resetPeaks() {
    console.log(this.peakService.resetPeaks().subscribe((response: any) => {
      console.log(response);
    }));
  }

}
