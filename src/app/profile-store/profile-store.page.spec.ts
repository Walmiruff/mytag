import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStorePage } from './profile-store.page';

describe('ProfileStorePage', () => {
  let component: ProfileStorePage;
  let fixture: ComponentFixture<ProfileStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileStorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
