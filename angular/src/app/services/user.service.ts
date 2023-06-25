import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IUser, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<IUser[]> {
    return this.http.get<IUser[]>('/api/users');
  }

  createUser(user: User) : Observable<any> {
    console.log('Rest Util: ' + JSON.stringify(user))
    return this.http.post<any>('/api/createUser', user);
  }

  updateUser(user: User) : Observable<any> {
    console.log('Rest Util: ' + JSON.stringify(user))
    return this.http.post<any>('/api/updateUser', user);
  }

  deleteUser(user: User) : Observable<any> {
    console.log('Rest Util: ' + JSON.stringify(user))
    return this.http.delete<any>('/api/user/' + user.email);
  }

  resetUsers() : Observable<any> {
    return this.http.get<any>('/api/resetUserCollection');
  }

}