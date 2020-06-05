import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveCodeComponent } from './add-leave-code.component';

describe('AddLeaveCodeComponent', () => {
  let component: AddLeaveCodeComponent;
  let fixture: ComponentFixture<AddLeaveCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeaveCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeaveCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
