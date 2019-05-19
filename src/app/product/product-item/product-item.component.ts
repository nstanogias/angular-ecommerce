import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public product: Product;
  private quantities: Array<number>;

  constructor() { }

  ngOnInit() {
    this.product = {
      name: 'Test',
      imageUrl: 'http://via.placeholder.com/150x150',
      price: 50,
      isOnSale: true,
      quantityInChart: 0
    };
    this.quantities = [];
    for (let i=0; i<20; i++) {
      this.quantities.push(i);
    }
  }

  increment() {
    this.product.quantityInChart++;
  }

  decrement() {
    if (this.product.quantityInChart > 0) {
      this.product.quantityInChart--;
    }
  }

  quantityChanged(qty) {
    console.log('Quantity is ', qty);
  }
}
