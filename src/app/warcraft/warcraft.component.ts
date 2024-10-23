import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
interface RelatedVideo {
  title: string;
  thumbnail: string;
  isVideo: boolean;
}
@Component({
  selector: 'app-warcraft',
  templateUrl: './warcraft.component.html',
  styleUrl: './warcraft.component.css'
})
export class WarcraftComponent {
  currentTitle: string = 'Warcraft'; // Set the title for the Warcraft component

  selectedVideoUrl: SafeResourceUrl;
  selectedIndex: number = 0;
  currentSlide:number = 0;
  selectedEditionIndex: number | null = null;
  hoveredEditionIndex: number | null = null;

  showAdditionalInfo: boolean = false;

  isCompareActive: boolean = false; // Flag to show/hide compare section
  selectedTab: string = 'overview'; // Default tab

  isNavbarHidden = false;
   

  relatedVideos: RelatedVideo[] = [
    { title: 'Image 1', isVideo: false, thumbnail: 'assets/sliding/1.jpg' },
    { title: 'Video 1', isVideo: true, thumbnail: 'https://www.youtube.com/embed/zYdFLUBjwCU' },

    { title: 'Image 2', isVideo: false, thumbnail: 'assets/sliding/2.avif' },
    { title: 'Video 2', isVideo: true, thumbnail: 'https://www.youtube.com/embed/1XmNNDU00Q0' },

    { title: 'Image 3', isVideo: false, thumbnail: 'assets/sliding/3.jpg' },
    { title: 'Video 3', isVideo: true, thumbnail: 'https://www.youtube.com/embed/zaY6TpCNP-k' },

    { title: 'Image 4', isVideo: false, thumbnail: 'assets/sliding/4.webp' },
    { title: 'Video 4', isVideo: true, thumbnail: 'https://www.youtube.com/embed/o03STclgxSc' },
  
    { title: 'Image 5', isVideo: false, thumbnail: 'assets/sliding/5.webp' },
    { title: 'Video 5', isVideo: true, thumbnail: 'https://www.youtube.com/embed/8E3VRgrQ7Ko' },
  ];

  /************************************* */
  editions = [
    { name: 'Epic Edition', price: '$89.99', preview: 'https://www.youtube.com/embed/8E3VRgrQ7Ko', isVideo: true },
    { name: 'Heroic Edition', price: '$69.99', preview: 'https://www.youtube.com/embed/zYdFLUBjwCU', isVideo: true },
    { name: 'Base Edition', price: '$49.99', preview: 'https://www.youtube.com/embed/1XmNNDU00Q0', isVideo: true }
  ];


  constructor(private sanitizer: DomSanitizer) {
    this.selectedVideoUrl = this.sanitizeUrl(this.relatedVideos[0].thumbnail || '');
  }

  selectVideo(index: number): void {
    this.selectedIndex = index;
    const selected = this.relatedVideos[index];
    
    if (selected.isVideo) {
      this.selectedVideoUrl = this.sanitizeUrl(selected.thumbnail); // For video
    } else {
      this.selectedVideoUrl = this.sanitizeUrl(selected.thumbnail); // For image (or other cases)
    }
  }
  getYoutubeThumbnail(videoUrl: string): string {
    const videoId = this.extractYoutubeVideoId(videoUrl);
    return `https://img.youtube.com/vi/${videoId}/0.jpg`; // URL for YouTube thumbnail
  }
  
  extractYoutubeVideoId(url: string): string | null {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
    return videoIdMatch ? videoIdMatch[1] : null;
  }

  selectEdition(index: number): void {
    this.selectedEditionIndex = index;
    const selectedEdition = this.editions[index];
    this.selectedVideoUrl = this.sanitizeUrl(selectedEdition.preview || '');
  }

  // Sanitize the video/image URL
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
  nextSlide() {
    if (this.currentSlide === this.relatedVideos.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.relatedVideos.length - 1;
    } else {
      this.currentSlide--;
    }
  }



  // Method to toggle the visibility of the additional info
  toggleAdditionalInfo(): void {
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }

  // Function to activate the compare section
  showCompareSection() {
    this.isCompareActive = true; // Show the compare section
    this.selectedTab = 'overview'; // Set default tab to overview
  }

  // Function to switch tabs
  selectTab(tab: string) {
    this.selectedTab = tab; // Change the selected tab
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    this.isNavbarHidden = scrollPosition > 800; // Adjust the height as needed
  }
}
