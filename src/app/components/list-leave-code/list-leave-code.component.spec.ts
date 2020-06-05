import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeaveCodeComponent } from './list-leave-code.component';

describe('ListLeaveCodeComponent', () => {
  let component: ListLeaveCodeComponent;
  let fixture: ComponentFixture<ListLeaveCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeaveCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeaveCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
