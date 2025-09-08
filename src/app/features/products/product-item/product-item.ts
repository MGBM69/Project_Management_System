import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {

  @Input({required:true}) product!:Product;
  @Output() delete=new EventEmitter<string>();

  onDelete(){
    this.delete.emit(this.product.id);
  }

}
