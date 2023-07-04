import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  produits: any[] = [];
  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.produits = this.productsService.dataProducts;
  }
}
