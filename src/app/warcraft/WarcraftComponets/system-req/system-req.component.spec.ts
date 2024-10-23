import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemReqComponent } from './system-req.component';

describe('SystemReqComponent', () => {
  let component: SystemReqComponent;
  let fixture: ComponentFixture<SystemReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemReqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
