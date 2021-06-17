import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargandoHayErrorComponent } from './cargando-hay-error.component';

describe('CargandoHayErrorComponent', () => {
  let component: CargandoHayErrorComponent;
  let fixture: ComponentFixture<CargandoHayErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargandoHayErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargandoHayErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
