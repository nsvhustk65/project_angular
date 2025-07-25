import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate {
  product = {
    title: '',
    price: 0,
    image: '',
    inStock: true,
  };

  constructor(private router: Router) {}

  handleSubmit() {
    console.log('Product created:', this.product);
    this.router.navigate(['/products']);
  }
}
