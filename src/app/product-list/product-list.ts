import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
      inStock: true,
      imageUrl: 'https://picsum.dev/300/200'
    },
    {
      id: 2,
      name: 'Phone',
      price: 500,
      inStock: false,
      imageUrl: 'https://picsum.dev/300/200'
    },
    {
      id: 3,
      name: 'Tablet',
      price: 300,
      inStock: true,
      imageUrl: 'https://picsum.dev/300/200'
    },
  ];

  filterText = '';

  filterProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
