import { Product } from "../models/product.model";

export interface IStorageService<T>{
    getAll():T[];
    getById(id:string):T|undefined;
    create(item:Product):void
    update(item:T,id:string):void;
    delete(id:string):boolean;

}