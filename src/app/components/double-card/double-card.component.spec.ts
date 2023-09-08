import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleCardComponent } from './double-card.component';

describe('DoubleCardComponent', () => {
  let component: DoubleCardComponent;
  let fixture: ComponentFixture<DoubleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleCardComponent]
    });
    fixture = TestBed.createComponent(DoubleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
