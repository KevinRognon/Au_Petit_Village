import {Injectable, OnInit} from '@angular/core';
import { data } from '../assets/db_products/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit{
  public dataProducts = data;

  constructor() {
  }

  ngOnInit(): void {
  }
}
