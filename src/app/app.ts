import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list';
import { BrandComponent } from './brand/brand';
import { CategoryComponent } from './category/category';
import { UserComponent } from './user/user';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Sidebar,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-app';
}
