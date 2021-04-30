import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasCentralesComponent } from './cajas-centrales.component';

describe('CajasCentralesComponent', () => {
  let component: CajasCentralesComponent;
  let fixture: ComponentFixture<CajasCentralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajasCentralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajasCentralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
