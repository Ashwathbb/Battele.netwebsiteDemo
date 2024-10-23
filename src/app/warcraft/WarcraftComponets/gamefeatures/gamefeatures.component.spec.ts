import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamefeaturesComponent } from './gamefeatures.component';

describe('GamefeaturesComponent', () => {
  let component: GamefeaturesComponent;
  let fixture: ComponentFixture<GamefeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamefeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamefeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
