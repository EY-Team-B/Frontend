import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recruitment-tracker-app';
  loggedIn = false;
  constructor(private router: Router) { }
  buttonClick() {
    this.loggedIn = !this.loggedIn;
    if (this.loggedIn == true) {
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['']);
    }
  }
}
