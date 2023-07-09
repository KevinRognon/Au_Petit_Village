import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  items: any = [];
  constructor() { }

  ajouterProduitAuPanier(produit:number) {
    console.log(produit);
    this.items.push(produit);
    console.log(this.items);
  }
}
