export interface IStorageService<T>{
    getAll():T[];
    getById(id:string):T|undefined;
    update(item:T):void;
    delete(id:string):boolean;

}