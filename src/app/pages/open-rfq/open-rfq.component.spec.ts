/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpenRfqComponent } from './open-rfq.component';

describe('OpenRfqComponent', () => {
  let component: OpenRfqComponent;
  let fixture: ComponentFixture<OpenRfqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenRfqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenRfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
