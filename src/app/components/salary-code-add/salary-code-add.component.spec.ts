import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCodeAddComponent } from './salary-code-add.component';

describe('SalaryCodeAddComponent', () => {
  let component: SalaryCodeAddComponent;
  let fixture: ComponentFixture<SalaryCodeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryCodeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryCodeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
