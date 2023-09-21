import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollfactorComponent } from './enrollfactor.component';

describe('EnrollfactorComponent', () => {
  let component: EnrollfactorComponent;
  let fixture: ComponentFixture<EnrollfactorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollfactorComponent]
    });
    fixture = TestBed.createComponent(EnrollfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
