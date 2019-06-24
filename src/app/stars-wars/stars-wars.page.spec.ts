import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsWarsPage } from './stars-wars.page';

describe('StarsWarsPage', () => {
  let component: StarsWarsPage;
  let fixture: ComponentFixture<StarsWarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsWarsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsWarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
