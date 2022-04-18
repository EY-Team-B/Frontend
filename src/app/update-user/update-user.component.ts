import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  id!: number;
  user: User = new User();
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {}
}
