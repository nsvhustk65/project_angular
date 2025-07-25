import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-brand',
  standalone: true, // ✅ Thêm dòng này
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './brand.html',
  styleUrls: ['./brand.css'] // ✅ Phải dùng "styleUrls"
})
export class BrandComponent { // ✅ Đổi tên class cho đúng convention
  brands = [
    { id: 1, name: 'Dell' },
    { id: 2, name: 'Asus' },
    { id: 3, name: 'Apple' },
  ];

  filterText = '';

  filterBrands() {
    return this.brands.filter((brand) =>
      brand.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
