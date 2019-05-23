import {Component, EventEmitter, Output} from '@angular/core';
import {Product} from '../../model/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  @Output() private productCreated: EventEmitter<void> = new EventEmitter();

  public message = '';
  public productForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
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
      this.productService.createProduct(product).subscribe((res) => {
        this.message = 'Product successfully created.';
        console.log('Triggered event emitter');
        this.productCreated.next();
      }, (err) => {
        this.message = 'Unable to create product, please try again.';
      });
    }
  }
}
