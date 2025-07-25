import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class CategoryComponent {
  categories = [
    { id: 1, name: 'Electronics', description: 'Devices and gadgets' },
    { id: 2, name: 'Books', description: 'Various genres of books' },
    { id: 3, name: 'Clothing', description: 'Apparel and accessories' },
  ];

  filterText = '';

  filterCategories() {
    return this.categories.filter((category) =>
      category.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

}
