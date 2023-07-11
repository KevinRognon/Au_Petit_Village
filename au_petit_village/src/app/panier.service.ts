import { Injectable, OnInit} from '@angular/core';
import { ProductsService } from "./products.service";
import { gsap } from 'gsap';

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
    this.afficherMessageAjout();
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

  afficherMessageAjout() {
    gsap.fromTo(".msg_ajout", {opacity: 0}, {opacity: 1, duration: .3});
    gsap.fromTo(".msg_ajout", {opacity: 1}, {opacity: 0, delay: 2});
  }


}
