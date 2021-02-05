import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  showFiller = false;
  today: number = Date.now();
  report = [
    {
      label: 'Mon',
      songs: '25px',
      documents: '50px',
      photos: '70px',
      reportStatus: true
    },
    {
      label: 'Tue',
      songs: '50px',
      documents: '10px',
      photos: '100px',
      reportStatus: true
    },
    {
      label: 'Wed',
      songs: '40px',
      documents: '70px',
      photos: '20px',
      reportStatus: true
    },
    {
      label: 'Thu',
      songs: '50px',
      documents: '100px',
      photos: '120px',
      reportStatus: true
    },
    {
      label: 'Fri',
      songs: '90px',
      documents: '80px',
      photos: '20px',
      reportStatus: true
    },
    {
      label: 'Sat',
      songs: '100px',
      documents: '60px',
      photos: '40px',
      reportStatus: true
    },
    {
      label: 'Sun',
      songs: '80px',
      documents: '20px',
      photos: '130px',
      reportStatus: true
    }
  ]
}
