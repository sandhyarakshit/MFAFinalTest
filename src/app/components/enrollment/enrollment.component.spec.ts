import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollFactorComponent } from './enrollment.component';

describe('EnrollmentComponent', () => {
  let component: EnrollFactorComponent;
  let fixture: ComponentFixture<EnrollFactorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollFactorComponent]
    });
    fixture = TestBed.createComponent(EnrollFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
