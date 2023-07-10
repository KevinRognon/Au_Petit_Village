import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
import {ActivatedRoute} from "@angular/router";
import { PanierService } from "../panier.service";;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  product: any;

  constructor(
    private route: ActivatedRoute,
    public productService: ProductsService,
    private panierService: PanierService
  ) { }

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.dataProducts.find(product => product.id === productId)

  }

  ajouterProduit(){
    const product : number = Number(this.route.snapshot.paramMap.get('id'));
    this.panierService.ajouterProduitAuPanier(product);
  }
  ajouterProduitAuPanierHomePage(product_id: number) {

    this.panierService.ajouterProduitAuPanier(product_id);
  }
}
