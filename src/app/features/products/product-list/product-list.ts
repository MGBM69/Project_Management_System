import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { AsyncPipe } from '@angular/common';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe,ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  private productService=inject(ProductService);

  products$=this.productService.products$;

}
