import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductQuantityChange} from '../../model/product-quantity-change';
import {Observable, Subject} from 'rxjs';
import {ProductService} from '../../services/product.service';
import {debounceTime, distinctUntilChanged, startWith, switchMap} from 'rxjs/operators';
import {merge} from 'rxjs/internal/operators/merge';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products$: Observable<Product[]>;
  public searchTerm:string = '';

  private searchSubject: Subject<string> = new Subject();
  private reloadProductsList: Subject<void> = new Subject();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.searchSubject.pipe(
      startWith(this.searchTerm),
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.reloadProductsList),
      switchMap((query) => this.productService.getProducts(this.searchTerm))
    );
  }

  search() {
    this.searchSubject.next(this.searchTerm);
  }

  onQuantityChange(change: ProductQuantityChange) {
    this.productService.changeQuantity(change.product.id, change.changeInQuantity)
      .subscribe((res) => this.reloadProductsList
        .next());
  }

  onCreate() {
    this.reloadProductsList.next();
  }
}
