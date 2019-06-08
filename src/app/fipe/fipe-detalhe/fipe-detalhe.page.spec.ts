import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FipeDetalhePage } from './fipe-detalhe.page';

describe('FipeDetalhePage', () => {
  let component: FipeDetalhePage;
  let fixture: ComponentFixture<FipeDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FipeDetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FipeDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
