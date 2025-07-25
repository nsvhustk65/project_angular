import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './brand-create.html',
  styleUrl: './brand-create.css'
})
export class BrandCreateComponent {
  brand = { name: '' };

  constructor(private router: Router) {}

  handleSubmit() {
    // TODO: Thêm thương hiệu vào danh sách (gọi service hoặc API)
    this.router.navigate(['/brands']);
  }
}
