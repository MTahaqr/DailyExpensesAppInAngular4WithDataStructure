import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExpenseComponent } from './search-expense.component';

describe('SearchExpenseComponent', () => {
  let component: SearchExpenseComponent;
  let fixture: ComponentFixture<SearchExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
