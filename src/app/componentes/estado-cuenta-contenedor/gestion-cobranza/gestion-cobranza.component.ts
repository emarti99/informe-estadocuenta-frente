import { Component, Input, OnInit } from '@angular/core';
import { GestionCobranza } from 'src/app/interfaces/estadoCuenta.interface';

@Component({
  selector: 'app-gestion-cobranza',
  templateUrl: './gestion-cobranza.component.html',
  styleUrls: ['./gestion-cobranza.component.scss'],
})
export class GestionCobranzaComponent implements OnInit {
  @Input() gestionCobranza!: GestionCobranza[];
  colsGestion!: any[];

  constructor() {}

  ngOnInit(): void {
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
