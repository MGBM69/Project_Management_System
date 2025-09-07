import { Injectable } from '@angular/core';
import { IStorageService } from '../core/interfaces/storage.interface';
import { Product } from '../core/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IStorageService<Product>{
private readonly STORAGE_KEY='products';
private productSubject=new BehaviorSubject<Product[]>([]);

constructor(){
  this.loadProductFromStorage();

}
  
private loadProductFromStorage():void{
  const products=localStorage.getItem(this.STORAGE_KEY);
  if(products){
    const parseProducts=JSON.parse(products).map((product:Product)=>({
      ...product,
      createdAt:new Date(product.createdAt),
      updateAt:new Date(product.updatedAt),  
    }));
    this.productSubject.next(parseProducts);
  }
}

  getAll(): Product[] {
    return this.productSubject.getValue();
  }

  private saveToLocalStorage(product:Product[]):void{
    localStorage.setItem(this.STORAGE_KEY,JSON.stringify(product));
    this.productSubject.next(product);
  }
  getById(id: string): Product | undefined {
    return this.productSubject.getValue().find((product)=>product.id===id);
  }
  create(item: Omit<Product,'id'|'createdAt'|'updatedAt'>): void {
    const newProduct={
      ...item,
      id:crypto.randomUUID(),
      createdAt:new Date(),
      updatedAt:new Date(),
    };
    const products=[...this.productSubject.getValue(),newProduct];
    this.saveToLocalStorage(products);
    
  }
  update(item: Product,id:string): void {
    const products=this.productSubject.getValue().map((product:Product)=>
      product.id===id?{
        ...product, //spread operator
      ...item,
      updatedAt:new Date(),

      }:product
      
    );
    this.saveToLocalStorage(products) 
  }

  delete(id: string): boolean {

    const products=this.productSubject.getValue().filter((product)=>product.id !==id);
    this.saveToLocalStorage(products);
    return true;
  }
  
}
