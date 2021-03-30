import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminclassesComponent } from './adminclasses.component';

describe('AdminclassesComponent', () => {
  let component: AdminclassesComponent;
  let fixture: ComponentFixture<AdminclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
