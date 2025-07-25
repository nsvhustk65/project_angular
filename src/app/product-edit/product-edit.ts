import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.css'
})
export class ProductEditComponent {
  productId: number;
  product = {
    name: '',
    price: 0,
    imageUrl: '',
    inStock: true
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    // TODO: Lấy dữ liệu sản phẩm từ service hoặc mock data
    // Ví dụ:
    this.product = {
      name: 'Laptop',
      price: 1000,
      imageUrl: 'https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_1280.jpg',
      inStock: true
    };
  }

  saveProduct() {
    // TODO: Gọi API hoặc cập nhật dữ liệu sản phẩm
    alert('Đã lưu sản phẩm!');
    this.router.navigate(['/products']);
  }
}
