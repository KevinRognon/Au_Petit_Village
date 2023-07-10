import { Injectable, OnInit} from '@angular/core';
import { ProductsService } from "./products.service";

@Injectable({
  providedIn: 'root'
})
export class PanierService implements OnInit{
  items: any[] = [];
  constructor(
    public productService: ProductsService
  ) { }

  ngOnInit() {

  }

  ajouterProduitAuPanier(produit:number) {
    const id_produit = this.productService.dataProducts.find(product => product.id === produit);
    this.items.push(id_produit);

    this.setStorageItem()
  }



  supprimerProduitPanier(produit:any) {
    let id_produit = this.items.findIndex((item: { id: number }) => item.id === produit);
    if (id_produit !== -1) {
      this.items.splice(id_produit, 1);
    }
    this.setStorageItem()
  }
  setStorageItem () {
    const produitsPanier = JSON.stringify(this.items);
    localStorage.setItem('Panier', produitsPanier);
  }

  supprimerTotalitePanier() {
    this.items = [];
    localStorage.removeItem('Panier');
  }


}
