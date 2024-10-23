import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BattleNet';
  showMenuAndNavbar: boolean = true; 

  constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide navbar and menu bar if navigating to 404 page
        this.showMenuAndNavbar = !this.router.url.includes('/pagenotfound');
      }
    });
  }
}
