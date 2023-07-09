import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import {PanierService} from "./panier.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

public nbItems : number = 0;

  constructor(public panierService: PanierService ) {
  }

  ngOnInit() {
    this.updateNbItems()
  }

  updateNbItems () {
    this.nbItems = this.panierService.items.length;
  }

  isMenuActive = false;
  activeAnimation () {
    this.isMenuActive = !this.isMenuActive;
    this.checkActiveMenu(this.isMenuActive)
  }
  //
  checkActiveMenu (elemToCheck:boolean) {

    if (elemToCheck) {
      gsap.to('.menu .text-nav',
        {
          visibility: "visible",
        })
    }
    else {
      gsap.to('.menu .text-nav',
        {
          visibility: "hidden",
        })
    }
  }
}
