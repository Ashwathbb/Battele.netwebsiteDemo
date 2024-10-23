import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingCarouselComponent } from './sliding-carousel.component';

describe('SlidingCarouselComponent', () => {
  let component: SlidingCarouselComponent;
  let fixture: ComponentFixture<SlidingCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlidingCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
