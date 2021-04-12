import { Component, Input, OnInit } from '@angular/core';
import { EstadoCuenta } from '../../../interfaces/prototipo';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state(
        'void',
        style({
          transform: 'translateX(-10%)',
          opacity: 0,
        })
      ),
      state(
        'active',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class PrestamosComponent implements OnInit {
  @Input() estadoCuenta?: EstadoCuenta
  // products: any[] = [
  //   {
  //     fechaAprobacion: '27/03/2020',
  //     monto: 35000000,
  //     cuota: '20 / 30',
  //     tipoPrestamo: 'Emergencia',
  //     calificacion: 'B3',
  //     presentaAtraso: 'No',
  //     estadoPrestamo: 'terminado',
  //     orders: [{
  //       numero : 14,
  //       saldoRestante: 2500000,
  //       sistema: 'Alemán',
  //       interes: 21,
  //       tipoGarantia: 'x',
  //       situacion: 'Y',
  //       adelantado: '350000',
  //       enFecha: '12/04/2020',
  //       atrasoMax: 3,
  //       vencimiento: 'mañana',
  //       observacion: 'Hola que tal como estas',
  //       socioGarante: 23424,
  //       nombreGarante: 'Zulma Gomez'
  //     }]
  //   },
  // ];
  constructor() {}

  ngOnInit(): void {
  }
}

