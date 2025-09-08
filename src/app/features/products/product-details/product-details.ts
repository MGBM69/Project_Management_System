import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  
  private routes=inject(ActivatedRoute);
  private router=inject(Router);
  private productService=inject(ProductService);
  

  product=signal<Product|undefined>(undefined);


  ngOnInit(): void {
    const productId=this.routes.snapshot.paramMap.get('id');
    if(productId){
      this.product.set(this.productService.getById(productId));
    }
  }
  onDelete(){
    if(confirm('Are you sure want to delete this product?')){
      this.productService.delete(this.product()!.id);
      this.router.navigate(['/']);
    }
  }

}
