import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }


  isMenuActive = false;

  setClass () {
    this.isMenuActive = !this.isMenuActive;
    this.checkActiveMenu(this.isMenuActive)
  }

  checkActiveMenu (elemToCheck:boolean) {
  }
}
