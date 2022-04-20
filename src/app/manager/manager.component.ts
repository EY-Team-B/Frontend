import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  title = 'recruitment-tracker-app';
  loggedIn = false;
  constructor(private router: Router) { }
  buttonClick() {
    this.loggedIn = !this.loggedIn;
    if (this.loggedIn == true) {
      this.router.navigate(['report']);
    }
    else{
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
  }

}
