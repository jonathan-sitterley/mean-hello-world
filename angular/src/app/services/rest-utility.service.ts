import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RestUtilityService {

  constructor(private http: HttpClient) { }

  resetCollections() : Observable<any> {
    return this.http.get<any>('/api/resetCollections');
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

}