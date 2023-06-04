import { Component } from '@angular/core';

import { PeakService } from '../services/peak.service';
import { Peak } from '../models/peak';

@Component({
  selector: 'app-peaks',
  templateUrl: './peaks.component.html',
  styleUrls: ['./peaks.component.css']
})
export class PeaksComponent {

  public peaks: Peak[] = [];

  constructor(private peakService: PeakService) {}

  getPeaks() {
    console.log(this.peakService.getPeaks().subscribe(peaks => {
      this.peaks = peaks;
    }));
  }

}
