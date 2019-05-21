import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public message = '';
  constructor() { }

  ngOnInit() {
  }

  createProduct(productForm) {
    if (productForm.invalid) {
      this.message = 'Please correct errors and resubmit the form';
    } else {
      const product: Product = productForm.value.product;
      console.log('Created product ', product);
    }
  }
}
