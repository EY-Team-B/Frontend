import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  constructor() {}
  user: User = new User();

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.user);
  }
}
