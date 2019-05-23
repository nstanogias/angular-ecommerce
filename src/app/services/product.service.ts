import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  getProducts(query: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/product', {params: {q: query}});
  }

  changeQuantity(id: number, changeInQuantity: number): Observable<any> {
    return this.httpClient.patch('/api/product/' + id, {changeInQuantity: changeInQuantity});
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>('/api/product', product);
  }
}
