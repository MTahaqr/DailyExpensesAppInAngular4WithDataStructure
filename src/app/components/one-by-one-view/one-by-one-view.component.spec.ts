import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneByOneViewComponent } from './one-by-one-view.component';

describe('OneByOneViewComponent', () => {
  let component: OneByOneViewComponent;
  let fixture: ComponentFixture<OneByOneViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneByOneViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneByOneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
