import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list';
import { CategoryComponent } from './category/category';
import { UserCoponent } from './user/user';
import { BrandComponent } from './brand/brand';


export const routes: Routes = [
  {
     path: '',
    component: ProductListComponent
  },
    {
    path: 'products',
    component: ProductListComponent,
  },
    {
    path: 'categories',
    component: CategoryComponent,
  },
      {
    path: 'users',
    component: UserCoponent,
  },
        {
    path: 'brands',
    component: BrandComponent,
  },
];
