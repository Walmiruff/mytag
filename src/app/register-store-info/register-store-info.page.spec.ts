import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStoreInfoPage } from './register-store-info.page';

describe('RegisterStoreInfoPage', () => {
  let component: RegisterStoreInfoPage;
  let fixture: ComponentFixture<RegisterStoreInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterStoreInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStoreInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
