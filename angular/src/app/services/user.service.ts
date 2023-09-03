import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IUser, User } from '../models/user';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(notification: NotificationService) : Observable<IUser[]> {
    let result = this.http.get<IUser[]>('/api/users')
    result.subscribe({
      error: (err) => {
        console.error(err.error.message)
        notification.setError(err.error.message)
      },
      complete: () => {
        notification.clearSpinner()
      }
    })
    return result
  }

  createUser(user: User, notification: NotificationService) : Observable<any> {
    console.log('Rest Util: ' + JSON.stringify(user))
    let result = this.http.post<any>('/api/createUser', user)
    result.subscribe({
      next: (res) => {
        console.log(res.message)
      },
      error: (err) => {
        console.error(err.error.message)
        notification.setError(err.error.message)
      },
      complete: () => {
        notification.clearSpinner()
      }
    })
    return result;
  }

  updateUser(user: User, notification: NotificationService) : Observable<any> {
    console.log('Rest Util: ' + JSON.stringify(user))
    let result = this.http.post<any>('/api/updateUser', user)
    result.subscribe({
      next: (res) => {
        console.log(res.message)
      },
      error: (err) => {
        console.error(err.error.message)
        notification.setError(err.error.message)
      },
      complete: () => {
        notification.clearSpinner()
      }
    })
    return result
  }

  deleteUser(user: User, notification: NotificationService) : Observable<any> {
    console.log('Rest Util: ' + JSON.stringify(user))
    let result = this.http.delete<any>('/api/user/' + user.email)
    result.subscribe({
      next: (res) => {
        console.log(res.message)
      },
      error: (err) => {
        console.error(err.error.message)
        notification.setError(err.error.message)
      },
      complete: () => {
        notification.clearSpinner()
      }
    })
    return result
  }

  resetUsers(notification: NotificationService) : Observable<any> {
    let result = this.http.get<any>('/api/resetUserCollection');
    result.subscribe({
      next: (res) => {
        console.log(res.message)
      },
      error: (err) => {
        console.error(err.error.message)
        notification.setError(err.error.message)
      },
      complete: () => {
        notification.clearSpinner()
      }
    })
    return result
  }

  showError() {
    console.log('show error')
  }

}