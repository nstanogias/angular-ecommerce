import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../model/product';
import {ProductQuantityChange} from '../../model/product-quantity-change';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
  @Input() public product: Product;
  @Output() private quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter();

  constructor() { }

  increment() {
    this.quantityChange.emit({product: this.product, changeInQuantity: 1});
  }

  decrement() {
    if (this.product.quantityInCart > 0) {
      this.quantityChange.emit({product: this.product, changeInQuantity: -1});
    }
  }
}
