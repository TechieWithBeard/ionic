import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutionicPage } from './aboutionic.page';

describe('AboutionicPage', () => {
  let component: AboutionicPage;
  let fixture: ComponentFixture<AboutionicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutionicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
