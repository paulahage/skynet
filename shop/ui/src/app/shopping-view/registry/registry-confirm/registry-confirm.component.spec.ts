import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryConfirmComponent } from './registry-confirm.component';

describe('RegistryConfirmComponent', () => {
  let component: RegistryConfirmComponent;
  let fixture: ComponentFixture<RegistryConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistryConfirmComponent]
    });
    fixture = TestBed.createComponent(RegistryConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
