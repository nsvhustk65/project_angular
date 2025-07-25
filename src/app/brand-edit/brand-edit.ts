import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './brand-edit.html',
  styleUrl: './brand-edit.css'
})
export class BrandEditComponent {
  brand = { name: '' };

  constructor(private route: ActivatedRoute, private router: Router) {
    // TODO: Lấy dữ liệu thương hiệu theo id để sửa
    this.brand = { name: 'Thương hiệu mẫu' };
  }

  handleSubmit() {
    // TODO: Lưu dữ liệu đã sửa (gọi service hoặc API)
    this.router.navigate(['/brands']);
  }
}
