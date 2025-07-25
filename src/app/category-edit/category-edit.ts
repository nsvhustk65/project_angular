import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-edit',
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './category-edit.html',
  styleUrl: './category-edit.css'
})
export class CategoryEditComponent {
  category = { name: '' };

  constructor(private route: ActivatedRoute, private router: Router) {
    // TODO: Lấy dữ liệu danh mục theo id để sửa
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.category = ...lấy dữ liệu từ service...
    this.category = { name: 'Danh mục mẫu' };
  }

  handleSubmit() {
    // TODO: Lưu dữ liệu đã sửa (gọi service hoặc API)
    this.router.navigate(['/categories']);
  }
}
