import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public product: Product;

  constructor() { }

  ngOnInit() {
    this.product = {
      name: 'Test',
      imageUrl: 'http://via.placeholder.com/150x150',
      price: 50,
      isOnSale: true,
      quantityInChart: 0
    };
  }

  increment() {
    this.product.quantityInChart++;
  }

  decrement() {
    if (this.product.quantityInChart > 0) {
      this.product.quantityInChart--;
    }
  }
}
