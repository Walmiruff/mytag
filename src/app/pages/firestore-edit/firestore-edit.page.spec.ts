import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoreEditPage } from './firestore-edit.page';

describe('FirestoreEditPage', () => {
  let component: FirestoreEditPage;
  let fixture: ComponentFixture<FirestoreEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirestoreEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestoreEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
