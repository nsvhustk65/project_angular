import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {
  users = [
    { id: 1, name: 'Nguyễn Sỹ Vinh',phone:'01234567',address:'Nghe An', email: 'nsvhustk65@gmail.com ' },
  ];

  filterText = '';

  filterUsers() {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

}
