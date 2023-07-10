import { Injectable, OnInit} from '@angular/core';
import { ProductsService } from "./products.service";

@Injectable({
  providedIn: 'root'
})
export class PanierService implements OnInit{
  items: any[] = [];
  nbItems: number = 0;
  constructor(
    public productService: ProductsService
  ) { }

  ngOnInit() {

  }

  ajouterProduitAuPanier(produit:number) {
    const id_produit = this.productService.dataProducts.find(product => product.id === produit);
    this.items.push(id_produit);

    this.updateNbItems();
    this.setStorageItem()
  }

  updateNbItems () {
    this.nbItems = this.items.length;
  }

  supprimerProduitPanier(produit:any) {
    let id_produit = this.items.findIndex((item: { id: number }) => item.id === produit);
    if (id_produit !== -1) {
      this.items.splice(id_produit, 1);
      this.updateNbItems();
    }
    this.setStorageItem()
  }
  setStorageItem () {
    const produitsPanier = JSON.stringify(this.items);
    localStorage.setItem('Panier', produitsPanier);
  }

  supprimerTotalitePanier() {
    while (this.items.length > 0) {
      this.items.pop();
    }
    this.updateNbItems()
  }
}
