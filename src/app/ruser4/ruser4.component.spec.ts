import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ruser4Component } from './ruser4.component';

describe('Ruser4Component', () => {
  let component: Ruser4Component;
  let fixture: ComponentFixture<Ruser4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ruser4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ruser4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
