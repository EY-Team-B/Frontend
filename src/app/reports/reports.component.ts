import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';



@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  users!: User[];

  constructor() { }
  

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
