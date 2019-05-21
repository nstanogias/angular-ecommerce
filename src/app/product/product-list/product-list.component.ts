import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductQuantityChange} from '../../model/product-quantity-change';
import {Observable} from 'rxjs';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  onQuantityChange(change: ProductQuantityChange) {
    this.productService.changeQuantity(change.product.id, change.changeInQuantity);
  }
}
