import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCurrentExpComponent } from './review-current-exp.component';

describe('ReviewCurrentExpComponent', () => {
  let component: ReviewCurrentExpComponent;
  let fixture: ComponentFixture<ReviewCurrentExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCurrentExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCurrentExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
