import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  produits: any[] = [];
  searchText = '';
  filteredProduits: any[] = [];
  responseText: string = ''; // Modifiez le type de la variable

  constructor(private productsService: ProductsService) {}

  filterProduits() {
    this.filteredProduits = this.produits.filter(produit => {
      const isMatching = produit.product_name.toLowerCase().includes(this.searchText.toLowerCase());
      if(isMatching) {
        this.responseText = '';
        return true;
      }
      else {
        this.responseText = 'Aucun produit correspondant';
        return false;
      }
    });
  }

  ngOnInit() {
    this.produits = this.productsService.dataProducts;
    this.filterProduits();
  }
}
