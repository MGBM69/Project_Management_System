import { Component, inject, OnInit, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidationError } from '../../../core/util/form.errors';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-home',
  imports: [ReactiveFormsModule],
  templateUrl: './product-home.html',
  styleUrl: './product-home.css'
})
export class ProductForm implements OnInit {
  #fb=inject(FormBuilder);
  productForm!:FormGroup;
  private router=inject(Router);
  private productService=inject(ProductService);
  private route=inject(ActivatedRoute);

  isEditMode=signal(false);
  productId=signal<string|null>(null);

  ngOnInit(): void {
    this.initForm();
    const productId=this.route.snapshot.paramMap.get('id');
    if(productId){
      this.isEditMode.set(true);
      this.productId.set(productId);
      const product=this.productService.getById(productId);
      if(product){
        this.productForm.patchValue({
          name:product.name,
          description:product.description,
          price:product.price,
          quantity:product.quantity
        });
      }
    }
    
  }
  private initForm(){
    this.productForm=this.#fb.group({
      name:['',Validators.required],
      description:['',Validators.required],
      price:[0,[Validators.required,Validators.min(1)]],
      quantity:[0,[Validators.required,Validators.min(0)]]
    });
  }
  isFieldInvalid(fieldName:string):boolean{
    const field=this.productForm.get(fieldName);


    return !!field &&field.invalid &&field.touched;

  }


  onSubmit(){
    if(this.productForm.valid){
      this.productService.create(this.productForm.value);
      this.router.navigate(['/']);
    }

  }

  getError(ctrl:AbstractControl,name:string){
    return FormValidationError.getFormControllErrorMsg(ctrl,name);
  }

  onCancel(){
    this.router.navigate(['/']);

  }

}
