import { Component } from '@angular/core';
import {Product} from '../../model/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  public message = '';
  public productForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('^http(s?)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$')]],
      isOnSale: false
    });
  }

  createProduct() {
    if (this.productForm.invalid) {
      this.message = 'Please correct errors and resubmit the form';
    } else {
      const product: Product = this.productForm.value;
      console.log('Created product ', product);
    }
  }
}
