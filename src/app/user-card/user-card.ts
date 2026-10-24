import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  name = input<string>('John Doe');
  role = input<string>('Software Engineer');

  getProfilename = output<string>();

  viewProfile() {
    this.getProfilename.emit(this.name());
  }
}
