import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumbitComponent } from './sumbit.component';

describe('SumbitComponent', () => {
  let component: SumbitComponent;
  let fixture: ComponentFixture<SumbitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumbitComponent]
    });
    fixture = TestBed.createComponent(SumbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
