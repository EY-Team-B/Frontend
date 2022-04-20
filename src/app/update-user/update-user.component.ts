import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { Roles } from '../roles';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();
  email: string = '';
  roles: Roles = new Roles();
  constructor(private service: UserService, private router: Router, private dataService: DataTransferService) {
  }

  ngOnInit(): void {
    this.user = this.dataService.getData();
    this.email=this.user.email;
  }

  async onSubmit() {
    if(window.confirm("Continue?")){
      window.alert("Updated Successfully");
      this.service.update(this.email, this.user).subscribe();
      this.dataService.clearData();
      this.user=new User();
      this.router.navigate(['/view']);
    }
  }

  cancel(){
    this.dataService.clearData();
    this.user=new User();
    this.router.navigate(['/view']);
  }
}
