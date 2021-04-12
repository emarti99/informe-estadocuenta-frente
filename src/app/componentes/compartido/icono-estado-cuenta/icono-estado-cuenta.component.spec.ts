import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoEstadoCuentaComponent } from './icono-estado-cuenta.component';

describe('IconoEstadoCuentaComponent', () => {
  let component: IconoEstadoCuentaComponent;
  let fixture: ComponentFixture<IconoEstadoCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconoEstadoCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconoEstadoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
