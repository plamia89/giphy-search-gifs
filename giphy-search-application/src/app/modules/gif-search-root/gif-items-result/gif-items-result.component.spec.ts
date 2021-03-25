/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GifItemsResultComponent } from './gif-items-result.component';

describe('GifItemsResultComponent', () => {
  let component: GifItemsResultComponent;
  let fixture: ComponentFixture<GifItemsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifItemsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifItemsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
