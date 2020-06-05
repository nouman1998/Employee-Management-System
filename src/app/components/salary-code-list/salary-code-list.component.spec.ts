import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCodeListComponent } from './salary-code-list.component';

describe('SalaryCodeListComponent', () => {
  let component: SalaryCodeListComponent;
  let fixture: ComponentFixture<SalaryCodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryCodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
