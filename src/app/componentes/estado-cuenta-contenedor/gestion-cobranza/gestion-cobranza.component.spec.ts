import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCobranzaComponent } from './gestion-cobranza.component';

describe('GestionCobranzaComponent', () => {
  let component: GestionCobranzaComponent;
  let fixture: ComponentFixture<GestionCobranzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCobranzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCobranzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
