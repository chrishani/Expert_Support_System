import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewclassComponent } from './addnewclass.component';

describe('AddnewclassComponent', () => {
  let component: AddnewclassComponent;
  let fixture: ComponentFixture<AddnewclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
