import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor() {}
  updateUser(id: number) {}
  deleteUser(id: number) {}
  userDetails(id: number) {}

  ngOnInit(): void {
    this.users = [
      {
        id: 1,
        name: 'Soumya',
        department: 'tech',
        designation: ['Panel'],
        email: 'soumya@gmail.com',
      },
      {
        id: 2,
        name: 'Naman',
        department: 'tech',
        designation: ['Panel'],
        email: 'naman@gmail.com',
      },
    ];
  }
}
