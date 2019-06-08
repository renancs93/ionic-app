import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FipePage } from './fipe.page';

describe('FipePage', () => {
  let component: FipePage;
  let fixture: ComponentFixture<FipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
