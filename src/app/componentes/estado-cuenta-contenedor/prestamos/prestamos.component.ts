import { Component, Input, OnInit } from '@angular/core';
import { Prestamos } from '../../../interfaces/estadoCuenta.interface';
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
  @Input() prestamos!: Prestamos[];

  constructor() {}

  ngOnInit(): void {
     this.prestamos.sort((a, b) => {
       if (a.PRES_socio_aprobado_fecha > b.PRES_socio_aprobado_fecha) {
         return -1;
       } else {
         return 1;
       }
     });
  }
}
