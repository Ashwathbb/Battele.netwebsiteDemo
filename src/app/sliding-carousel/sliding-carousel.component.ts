import { Component } from '@angular/core';

@Component({
  selector: 'app-sliding-carousel',
  templateUrl: './sliding-carousel.component.html',
  styleUrl: './sliding-carousel.component.css'
})
export class SlidingCarouselComponent {
  currentSlide:number = 0;
  isSlideshowActive = false;
  slideshowInterval: any;
  slides = [
    {
      imageUrl: 'assets/sliding/1.jpg',
      title: 'BLACKCELL',
      live: true,
      prePurchase: false,
      link: '/menunav/warcraft',
      description: 'Sesson 6 Live. Get The New BlackCell Pack'
    },
    {
      imageUrl: 'assets/sliding/2.avif',
      title: 'CALL OF DUTY BLACK OPS 6',
      live: false,
      prePurchase: true,
      link: '/menunav/warcraft',
      description: 'Get The Hunter vs Hunter Operator Pack'
    },
    {
      imageUrl: 'assets/sliding/3.jpg',
      title: 'WARCRAFT',
      live: true,
      prePurchase: false,
      link: '/menunav/warcraft',
      description: 'Get Back to The Fight!The War Within Is Now Live'
    },
    {
      imageUrl: 'assets/sliding/4.webp',
      title: 'OVERWATCH 2',
      live: false,
      prePurchase: true,
      link: '/menunav/warcraft',
      description: 'Get The Premimum Battle Pass and Reap Legnedry rewards'
    },
    {
      imageUrl: 'assets/sliding/5.webp',
      title: 'DIABLO IV',
      live: false,
      prePurchase: true,
      link: '/menunav/warcraft',
      description: 'Last Chancce To Pre-Purchase '
    },
    {
      imageUrl: 'assets/sliding/6.webp',
      title: 'Starcraft Tournament',
      live: true,
      prePurchase: false,
      link: '/menunav/warcraft',
      description:'Level Up Your Vacation With The Tarvaeling. '
    }
  ];
   // Toggles the slideshow on and off
   toggleSlideshow() {
    this.isSlideshowActive = !this.isSlideshowActive;

    if (this.isSlideshowActive) {
      this.startSlideshow();
    } else {
      this.stopSlideshow();
    }
  }

  // Starts the slideshow
  startSlideshow() {
    this.slideshowInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  // Stops the slideshow
  stopSlideshow() {
    clearInterval(this.slideshowInterval);
  }
  nextSlide() {
    if (this.currentSlide === this.slides.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.slides.length - 1;
    } else {
      this.currentSlide--;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
  scrollToSection() {
    // Implement scroll functionality if needed
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
