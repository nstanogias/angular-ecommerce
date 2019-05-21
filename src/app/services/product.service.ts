import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];
  constructor() {
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

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  changeQuantity(id: number, changeInQuantity: number): Observable<Product> {
    const product = this.products
      .find(prod => prod.id === id);
    product.quantityInCart += changeInQuantity;
    return of(product);
  }

  createProduct(product: Product): Observable<any> {
    const productClone = Object.assign({}, product);
    productClone.id = this.products.length + 1;
    productClone.quantityInCart = 0;
    this.products.push(productClone);
    return of(productClone);
  }
}
