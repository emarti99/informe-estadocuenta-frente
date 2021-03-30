import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCuentaContenedorComponent } from './estado-cuenta-contenedor.component';

describe('EstadoCuentaContenedorComponent', () => {
  let component: EstadoCuentaContenedorComponent;
  let fixture: ComponentFixture<EstadoCuentaContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoCuentaContenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoCuentaContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
