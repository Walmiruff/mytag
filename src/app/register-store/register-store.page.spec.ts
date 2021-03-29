import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStorePage } from './register-store.page';

describe('RegisterStorePage', () => {
  let component: RegisterStorePage;
  let fixture: ComponentFixture<RegisterStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterStorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
