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
    this.checkActiveMenu(this.isMenuActive)
  }

  checkActiveMenu (elemToCheck:boolean) {

    if (elemToCheck) {
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
}
