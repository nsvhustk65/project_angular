import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserCoponent {
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
