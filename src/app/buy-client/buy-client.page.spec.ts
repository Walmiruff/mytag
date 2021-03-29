import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyClientPage } from './buy-client.page';

describe('BuyClientPage', () => {
  let component: BuyClientPage;
  let fixture: ComponentFixture<BuyClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyClientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
