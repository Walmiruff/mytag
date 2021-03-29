import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstartedPage } from './getstarted.page';

describe('GetstartedPage', () => {
  let component: GetstartedPage;
  let fixture: ComponentFixture<GetstartedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetstartedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstartedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
