import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosGestionCobranzaComponent } from './ahorros-gestion-cobranza.component';

describe('AhorrosGestionCobranzaComponent', () => {
  let component: AhorrosGestionCobranzaComponent;
  let fixture: ComponentFixture<AhorrosGestionCobranzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorrosGestionCobranzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrosGestionCobranzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
