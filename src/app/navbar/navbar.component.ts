import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbarFixed: boolean = false;
  isDropdownOpen: boolean = false;
  constructor(private router: Router) {}
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Detect if the scroll is greater than 50px
    if (window.scrollY > 94) {
      this.navbarFixed = true;
    } else {
      this.navbarFixed = false;
    }
  }

}
