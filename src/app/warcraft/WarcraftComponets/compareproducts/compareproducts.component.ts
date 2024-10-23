import { Component } from '@angular/core';

@Component({
  selector: 'app-compareproducts',
  templateUrl: './compareproducts.component.html',
  styleUrl: './compareproducts.component.css'
})
export class CompareproductsComponent {
 
  isCompareActive: boolean = false; // Flag to show/hide compare section
  selectedTab: string = 'overview'; // Default tab

  showCompareSection() {
    this.isCompareActive = true; // Show the compare section
    this.selectedTab = 'overview'; // Set default tab to overview
  }

  // Function to switch tabs
  selectTab(tab: string) {
    this.selectedTab = tab; // Change the selected tab
  }
}
