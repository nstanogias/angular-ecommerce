import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductQuantityChange} from '../../model/product-quantity-change';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Test Product - 1',
        imageUrl: 'http://via.placeholder.com/150x150',
        price: 50,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        id: 2,
        name: 'Test Product - 2',
        imageUrl: 'http://via.placeholder.com/150x150',
        price: 150,
        isOnSale: false,
        quantityInCart: 0
      },
      {
        id: 3,
        name: 'Test Product - 3',
        imageUrl: 'http://via.placeholder.com/150x150',
        price: 250,
        isOnSale: true,
        quantityInCart: 0
      }
    ];
  }

  onQuantityChange(change: ProductQuantityChange) {
    const product = this.products.find(prod => {
      return change.product.id === prod.id;
    });
    product.quantityInCart += change.changeInQuantity;
  }

}
