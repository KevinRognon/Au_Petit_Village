import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import {PanierService} from "./panier.service";
import {PanierComponent} from "./panier/panier.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(public panierService: PanierService, public panierComp : PanierComponent ) {

  }

  ngOnInit() {

  }


  isMenuActive = false;
  activeAnimation () {
    this.isMenuActive = !this.isMenuActive;
    this.checkActiveMenu(this.isMenuActive)
  }
  //
  checkActiveMenu (elemToCheck:boolean) {

    if (elemToCheck) {
      // <li> DU MENU =================================================
      gsap.to('.menu .text-nav',
        {
          visibility: "visible",
        })

      // LOGO DU MENU (PANIER ET MENU HAMBURGER) ============================================
      gsap.to(".menu-hamburger", {
        opacity: 0,
        scale: 0,
        duration: .3
      });
      gsap.to(".croix", {
        opacity: 1,
        scale: 1,
        duration: .3
      });
    }
    else {
      // <li> DU MENU =================================================
      gsap.to('.menu .text-nav',
        {
          visibility: "hidden",
        })

      // LOGO DU MENU (PANIER ET MENU HAMBURGER) ============================================
      gsap.to(".menu-hamburger", {
        opacity: 1,
        scale: 1,
        duration: .3
      });
      gsap.to(".croix", {
        opacity: 0,
        scale: 0,
        duration: .3
      });
    }
  }

  activePanierAnimation() {
    const tl = gsap.timeline({defaults: {duration: .1}});
    tl.to('.bouton-panier', {opacity: 1});
    tl.to('.bouton-panier', {opacity: 0.6});
    tl.to('.bouton-panier', {opacity: 1});

    tl.play();
  }
}
