import {Injectable} from '@angular/core';
import { data } from '../assets/db_products/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  public dataProducts = data;

  constructor() {
  }


}
