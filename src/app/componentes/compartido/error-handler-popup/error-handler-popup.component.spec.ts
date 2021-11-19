import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlerPopupComponent } from './error-handler-popup.component';

describe('ErrorHandlerPopupComponent', () => {
  let component: ErrorHandlerPopupComponent;
  let fixture: ComponentFixture<ErrorHandlerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHandlerPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHandlerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});