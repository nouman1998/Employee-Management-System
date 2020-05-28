import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenEmpComponent } from './main-screen-emp.component';

describe('MainScreenEmpComponent', () => {
  let component: MainScreenEmpComponent;
  let fixture: ComponentFixture<MainScreenEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScreenEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
