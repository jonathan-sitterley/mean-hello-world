import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Peak } from '../models/peak';

@Injectable({
  providedIn: 'root'
})
export class PeakService {

  constructor(private http: HttpClient) {}

  getPeaks() : Observable<Peak[]> {
    return this.http.get<Peak[]>('/api/peaks');
  }

}
