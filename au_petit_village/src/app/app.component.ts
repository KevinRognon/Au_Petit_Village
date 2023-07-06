import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }


  isMenuActive = false;

  activeAnimation () {
    this.isMenuActive = !this.isMenuActive;
    if (this.isMenuActive) {
      gsap.to('.overlay-menu',
        {
          right: 0,
          duration: .1,
          opacity: 100
        })
    }
    else {
      gsap.to('.overlay-menu',
        {
          right: "-100vw",
          duration: .1,
          opacity: 0
        })
    }
  }

  checkActiveMenu (elemToCheck:boolean) {
  }
}
