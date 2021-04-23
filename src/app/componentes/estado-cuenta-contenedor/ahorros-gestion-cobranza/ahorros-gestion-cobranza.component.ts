import { Component, Input, OnInit } from '@angular/core';
import { Ahorros } from 'src/app/interfaces/estadoCuenta.interface';
import { GestionCobranza } from '../../../interfaces/estadoCuenta.interface';

@Component({
  selector: 'app-ahorros-gestion-cobranza',
  templateUrl: './ahorros-gestion-cobranza.component.html',
  styleUrls: ['./ahorros-gestion-cobranza.component.scss'],
})
export class AhorrosGestionCobranzaComponent implements OnInit {
  @Input() ahorros!: Ahorros[];
  @Input() gestionCobranza!: GestionCobranza[];

  colsAhorros!: any[];
  colsGestion!: any[];

  constructor() {}

  ngOnInit(): void {
    this.colsAhorros = [
      { cabecera: 'Cuenta N॰' },
      { cabecera: 'Tipo de cuenta' },
      { cabecera: 'Cantidad' },
    ];

    this.colsGestion = [
      { cabecera: 'Sistema' },
      { cabecera: 'Capital' },
      { cabecera: 'Gastos Judiciales' },
      { cabecera: 'Honorarios' },
      { cabecera: 'Gastos admin' },
      { cabecera: 'Tipo' },
    ];
  }
}
