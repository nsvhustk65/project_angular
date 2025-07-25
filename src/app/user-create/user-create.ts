import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-create',
    imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './user-create.html',
  styleUrl: './user-create.css'
})
export class UserCreateComponent {
  user = { name: '', email: '', role: '' };

  constructor(private router: Router) {}

  handleSubmit() {
    // TODO: Thêm người dùng vào danh sách (gọi service hoặc API)
    this.router.navigate(['/users']);
  }
}
