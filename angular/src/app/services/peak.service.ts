import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Peak } from '../models/peak';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class PeakService {

  constructor(private http: HttpClient) {}

  getPeaks(notification: NotificationService): Observable<Peak[]> {
    let result = this.http.get<Peak[]>('/api/peaks')
    result.subscribe({
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

  getPeakByRank(rank: number, notification: NotificationService): Observable<Peak[]> {
    console.log('Get Peaks by Rank')
    let result = this.http.get<Peak[]>('/api/peak/' + rank)
    result.subscribe({
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

  resetPeaks(notification: NotificationService) : Observable<any> {
    let result = this.http.get<any>('/api/resetPeakCollection')
    result.subscribe({
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

}
