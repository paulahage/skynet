import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetPlansComponent } from './internet-plans.component';

describe('InternetPlansComponent', () => {
  let component: InternetPlansComponent;
  let fixture: ComponentFixture<InternetPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternetPlansComponent]
    });
    fixture = TestBed.createComponent(InternetPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
