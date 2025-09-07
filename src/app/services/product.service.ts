import { Injectable } from '@angular/core';
import { IStorageService } from '../core/interfaces/storage.interface';
import { Product } from '../core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IStorageService<Product>{
  getAll(): Product[] {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Product | undefined {
    throw new Error('Method not implemented.');
  }
  update(item: Product): void {
    throw new Error('Method not implemented.');
  }
  delete(id: string): boolean {
    throw new Error('Method not implemented.');
  }
  
}
