import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { TriProduitsPipe } from '../tri-produits.pipe';
import { ProductDetailComponent } from "../product-detail/product-detail.component";

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
  selectedSortOption: string = "prix-decroissant";

  constructor(
    private productsService: ProductsService,
    private productComp : ProductDetailComponent
  ) {}

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

  ajouterAuPanier(product_id: number) {
    this.productComp.ajouterProduitAuPanierHomePage(product_id);
  }

}
