import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClientPage } from './home-client.page';

describe('HomeClientPage', () => {
  let component: HomeClientPage;
  let fixture: ComponentFixture<HomeClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeClientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
