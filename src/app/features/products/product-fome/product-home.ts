import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidationError } from '../../../core/util/form.errors';
import { Router } from '@angular/router';
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
  ngOnInit(): void {
    this.initForm();
    
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
