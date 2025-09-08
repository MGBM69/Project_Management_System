import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { AsyncPipe } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe,ProductItem,RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  private productService=inject(ProductService);

  products$=this.productService.products$;

  onDelete(productId:string){
    if(confirm('Are you sure want to delete this product')){
      this.productService.delete(productId);
    }

  }

}
