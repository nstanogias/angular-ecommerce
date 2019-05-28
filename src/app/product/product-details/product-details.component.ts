import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {

  public product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(productId).subscribe(product => this.product = product);
  }
}
