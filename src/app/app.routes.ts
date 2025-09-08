import { Routes } from '@angular/router';
import { ProductList } from './features/products/product-list/product-list';
import { ProductForm } from './features/products/product-fome/product-home';

export const routes: Routes = [
    {path:'',
        redirectTo:'products',
        pathMatch:'full',
    },
    {
        path:'products',
        component:ProductList,
          
    },
    {
        path:'product/new',
        component:ProductForm
    }
];
