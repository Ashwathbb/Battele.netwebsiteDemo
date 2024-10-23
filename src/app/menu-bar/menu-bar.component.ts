import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  isDropdownOpen: boolean = false;

  // Toggle dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
   // Open dropdown on hover
   openDropdown() {
    this.isDropdownOpen = true;
  }

  // Close dropdown on mouse leave
  closeDropdown() {
    this.isDropdownOpen = false;
  }

  // Method for logging in
  login() {
    console.log('Login button clicked');
    // Add login functionality here
  }
}
