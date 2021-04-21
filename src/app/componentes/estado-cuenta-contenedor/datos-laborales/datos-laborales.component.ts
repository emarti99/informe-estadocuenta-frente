import { Component, Input, OnInit } from '@angular/core';
import { EstadoCuenta } from '../../../interfaces/prototipo';
import { FondoService } from '../../../servicios/fondo.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-datos-laborales',
  templateUrl: './datos-laborales.component.html',
  styleUrls: ['./datos-laborales.component.scss'],
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
export class DatosLaboralesComponent implements OnInit {

  @Input() estadoCuenta?: EstadoCuenta;


  constructor(private _estadoCuenta: FondoService) {}

  ngOnInit(): void {

  }
}
