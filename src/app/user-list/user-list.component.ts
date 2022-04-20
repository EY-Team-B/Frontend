import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(private router: Router, private service: UserService, private dataService: DataTransferService) {
  }
  updateUser(user: User) {
    this.dataService.setData(user);
    this.router.navigate(['/update-user']);
  }
  deleteUser(email: string) {
    this.service.delete(email).subscribe();
    window.alert(`${email} deleted successfully!`);
  }
  userDetails(id: string) {}

  async ngOnInit() {
    await this.service.findAll().subscribe(data=>this.users=data);
  }
}
