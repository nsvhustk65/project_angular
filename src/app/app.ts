import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list';
import { BrandComponent } from './brand/brand';
import { CategoryComponent } from './category/category';
import { UserCoponent } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductListComponent,BrandComponent,CategoryComponent,UserCoponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-app';
}
