import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-edit.html', 
  styleUrl: './user-edit.css'
})
export class UserEditComponent {
  user = { name: '', email: '', role: '' };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.user = { name: 'Nguyễn Văn A', email: 'a@gmail.com', role: 'user' };
  }

  handleSubmit() {
    this.router.navigate(['/users']);
  }
}
