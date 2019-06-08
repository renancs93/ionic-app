import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesDetalhePage } from './filmes-detalhe.page';

describe('FilmesDetalhePage', () => {
  let component: FilmesDetalhePage;
  let fixture: ComponentFixture<FilmesDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmesDetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
