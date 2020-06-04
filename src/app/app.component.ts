import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testoffice';

  ngOnInit() {
    get('/assets/office-js/office.js', () => {
      console.log("Office JS script loaded")
      Office.onReady().then(() => {
        console.log("Office is ready!")
      })
    })
  }
}
