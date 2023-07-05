import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  produits: any[] = [];
  searchText = '';
  filteredProduits : any[] = [];
  constructor(private productsService: ProductsService) {
  }

  filterProduits() {
    this.filteredProduits = this.produits.filter(produit => {
      return produit.product_name.toLowerCase().includes(this.searchText.toLowerCase());
    })
  }

  ngOnInit() {
    this.produits = this.productsService.dataProducts
    this.filterProduits();
  }

}
