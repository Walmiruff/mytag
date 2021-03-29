import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientPage } from './httpclient.page';

describe('HttpclientPage', () => {
  let component: HttpclientPage;
  let fixture: ComponentFixture<HttpclientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpclientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
