import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triProduits'
})
export class TriProduitsPipe implements PipeTransform {

  transform(produits: any[], selectedOption: string): any[]{
    if (selectedOption === "prix-croissant") {
      return produits.sort((a, b) => a.product_price - b.product_price);
    }
    else if (selectedOption === "prix-decroissant") {
      return produits.sort((a, b) => b.product_price - a.product_price);
    }
    else {
      return produits;
    }

  }
}
