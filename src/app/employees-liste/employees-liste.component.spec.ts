import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListeComponent } from './employees-liste.component';

describe('EmployeesListeComponent', () => {
  let component: EmployeesListeComponent;
  let fixture: ComponentFixture<EmployeesListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesListeComponent]
    });
    fixture = TestBed.createComponent(EmployeesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
