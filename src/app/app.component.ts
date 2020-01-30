import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cook-book';
  message: string;
  displayMessage = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.message = 'Loading...';
        this.displayMessage = true;
      } else if (e instanceof NavigationEnd) {
        this.displayMessage = false;
      }
    });
  }
}
