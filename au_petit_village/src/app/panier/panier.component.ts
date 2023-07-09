import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { PanierService } from "../panier.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit, OnChanges{
  public panier : any;
  public panierOk : any;
  public msgPanierVide : string;
  public somme : any = 0;


  constructor(
    public panierService : PanierService,
  ) {
    this.panier = panierService.items;
  }

  ngOnInit() {
    this.loadPanier();
    console.log(this.panier)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadPanier();
  }

  loadPanier() {

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
        this.somme = 0;

        for (let item of this.panier) {
          this.somme += item.product_price
        }
        this.somme = this.somme.toFixed(2);
        break;
      case false :
        this.msgPanierVide = "Panier vide."
    }

  }

  supprimerProduitPanier(product_id:any) {
    this.panierService.supprimerProduitPanier(product_id);
    this.ngOnInit();
  }
}
