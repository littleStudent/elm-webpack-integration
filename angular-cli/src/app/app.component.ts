import { AfterContentInit, Component } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  title = 'app';

  ngAfterContentInit() {
    // setTimeout(() => {
      const Elm = require('../elm/main');
      Elm.Main.embed(document.getElementById('elm'));
    // }, 1000);
  }
}
