import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent {
  currentTitle: string = 'Live'; // Title for the live component

  constructor(private router: Router) {}

  // Method to navigate to Warcraft and set the breadcrumb title
  goToWarcraft() {
    this.router.navigate(['/home/live/warcraft']);
  }
}
