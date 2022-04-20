import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css'],
})
export class RecruiterComponent{
  
  panels: string[] = ['panel1', 'panel2', 'panel3', 'panel4'];
  
  title = 'recruitment-tracker-app';
  loggedIn = false;
  constructor(private router: Router) { }
  createCandidate() {
    this.loggedIn = !this.loggedIn;
    if (this.loggedIn == true) {
      this.router.navigate(['create']);
    }
    else{
      this.router.navigate(['']);
    }
  }
  viewCandidate() {
    this.loggedIn = !this.loggedIn;
    if (this.loggedIn == true) {
      this.router.navigate(['show']);
    }
    else{
      this.router.navigate(['']);
    }
  }
  Schedule() {
    this.loggedIn = !this.loggedIn;
    if (this.loggedIn == true) {
      this.router.navigate(['scheduler']);
    }
    else{
      this.router.navigate(['']);
    }
  }
}
