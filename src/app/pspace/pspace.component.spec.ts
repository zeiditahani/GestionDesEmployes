import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PspaceComponent } from './pspace.component';

describe('PspaceComponent', () => {
  let component: PspaceComponent;
  let fixture: ComponentFixture<PspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PspaceComponent]
    });
    fixture = TestBed.createComponent(PspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
