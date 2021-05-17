import { Component, Input, OnInit } from '@angular/core';
import { Ahorros } from 'src/app/interfaces/estadoCuenta.interface';

@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.component.html',
  styleUrls: ['./ahorros.component.scss'],
})
export class AhorrosComponent implements OnInit {
  @Input() ahorros!: Ahorros[];
  colsAhorros!: any[];
  constructor() {}

  ngOnInit(): void {
    this.colsAhorros = [
      { cabecera: 'Cuenta N॰' },
      { cabecera: 'Tipo de cuenta' },
      { cabecera: 'Cantidad' },
    ];
  }
}
