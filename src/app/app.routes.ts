import { Routes } from '@angular/router';
import { ProductsComponent } from './paginas/products/products.component';
import { ProductDetailComponent } from './paginas/product-detail/product-detail.component';
import { CreateProductComponent } from './paginas/create-product/create-product.component';

export const routes: Routes = [
    {path:'products', component: ProductsComponent},
    {path:'products/:id', component:ProductDetailComponent},
    {path:'create', component:CreateProductComponent}
];
