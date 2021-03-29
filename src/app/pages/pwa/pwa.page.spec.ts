import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaPage } from './pwa.page';

describe('PwaPage', () => {
  let component: PwaPage;
  let fixture: ComponentFixture<PwaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
