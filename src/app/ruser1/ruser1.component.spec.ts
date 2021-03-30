import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ruser1Component } from './ruser1.component';

describe('Ruser1Component', () => {
  let component: Ruser1Component;
  let fixture: ComponentFixture<Ruser1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ruser1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ruser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
