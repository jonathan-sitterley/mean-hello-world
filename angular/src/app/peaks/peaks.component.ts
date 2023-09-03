import { Component, OnInit } from '@angular/core';

import { PeakService } from '../services/peak.service';
import { UserService } from '../services/user.service';
import { NotificationService } from '../services/notification.service';
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
              private userService: UserService,
              public notificationService: NotificationService,
              ) {}

  ngOnInit() {
    this.getUsers();
  }

  getPeaks() {
    this.notificationService.spinner();
    console.log(this.peakService.getPeaks(this.notificationService).subscribe(peaks => {
      this.peaks = peaks;
    }));
  }

  getPeakByRank() {
    this.notificationService.spinner();
    console.log(this.peakService.getPeakByRank(this.peakRank, this.notificationService).subscribe(peaks => {
      this.peaks = peaks;
    }));
  }

  getUsers() {
    this.notificationService.spinner();
    console.log(this.userService.getUsers(this.notificationService).subscribe(users => {
      this.users = users;
    }));
  }

  updateUser() {
    this.notificationService.spinner();
    console.log('Update user: ' + JSON.stringify(this.selectedUser));
    this.userService.updateUser(this.selectedUser, this.notificationService)
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
    this.notificationService.spinner();
    console.log(this.peakService.resetPeaks(this.notificationService).subscribe((response: any) => {
      this.peaks = [];
    }));
  }

}
