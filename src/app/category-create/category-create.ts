import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-create',
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './category-create.html',
  styleUrl: './category-create.css'
})
export class CategoryCreateComponent {
  category = { name: '' };

  constructor(private router: Router) {}

  handleSubmit() {
    // TODO: Thêm danh mục vào danh sách (gọi service hoặc API)
    this.router.navigate(['/categories']);
  }
}
