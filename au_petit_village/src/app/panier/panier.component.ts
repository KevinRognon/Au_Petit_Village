import {Component, OnInit} from '@angular/core';
import { PanierService } from "../panier.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit{
  public panier : any;
  public panierOk : any;
  public msgPanierVide : string;
  public somme : number = 0;


  constructor(
    panier : PanierService,
  ) {
    this.panier = panier.items;
  }

  ngOnInit() {
    this.panier = localStorage.getItem('Panier');

    if(this.panier) {
      this.panierOk = true;
    }
    else {
      this.panier = false;
    }

    switch (this.panierOk) {
      case true :
        this.panier = JSON.parse(this.panier);

        for (let item of this.panier) {
          this.somme += item.product_price;
        }
        break;
      case false :
        this.msgPanierVide = "Panier vide."
    }
  }
}
