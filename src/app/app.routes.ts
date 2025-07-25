import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list';
import { CategoryComponent } from './category/category';
import { UserComponent } from './user/user';
import { BrandComponent } from './brand/brand';
import { ProductDetail } from './product-detail/product-detail';
import { ProductCreate } from './product-create/product-create';
import { ProductEditComponent } from './product-edit/product-edit';
import {  DashboardComponent } from './dashboard/dashboard';
import { BrandCreateComponent } from './brand-create/brand-create';
import { BrandEditComponent } from './brand-edit/brand-edit';
import { CategoryCreateComponent } from './category-create/category-create';
import { CategoryEditComponent } from './category-edit/category-edit';
import { UserCreateComponent } from './user-create/user-create';
import { UserEditComponent } from './user-edit/user-edit';


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
    component: UserComponent,
  },
        {
    path: 'brands',
    component: BrandComponent,
  },
    {
    path: 'product/:id/detail',
    component: ProductDetail,
  },
          {
    path: 'product/create',
    component: ProductCreate,
  },
          {
    path: 'product/:id/edit',
    component: ProductEditComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
  path: 'brands/create',
  component: BrandCreateComponent,
},
{
  path: 'brands/:id/edit',
  component: BrandEditComponent,
},
{
  path: 'categories/create',
  component: CategoryCreateComponent,
},
{
  path: 'categories/:id/edit',
  component: CategoryEditComponent,
},
{
  path: 'users/create',
  component: UserCreateComponent,
},
{
  path: 'users/:id/edit',
  component: UserEditComponent,
},

];
