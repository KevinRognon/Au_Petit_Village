import {ChangeDetectorRef, Injectable} from '@angular/core';
import { ProductsService } from "./products.service";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  items: any = [];
  constructor(
    public productService: ProductsService
  ) { }

  ajouterProduitAuPanier(produit:number) {
    const id_produit = this.productService.dataProducts.find(product => product.id === produit);
    this.items.push(id_produit);

    this.setStorageItem()
  }

  supprimerProduitPanier(produit:number) {
    const id_produit = this.productService.dataProducts.findIndex(item => item.id === produit);
    this.items.splice(id_produit, 1);

    this.setStorageItem()
  }
  setStorageItem () {
    const produitsPanier = JSON.stringify(this.items);
    localStorage.setItem('Panier', produitsPanier);

  }
}
