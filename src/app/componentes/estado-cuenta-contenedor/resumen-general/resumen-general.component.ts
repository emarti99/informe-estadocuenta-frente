import { Component, Input, OnInit } from '@angular/core';
import {
  DatosAnaliticos,
  DatosPersonalesGeneral,
} from '../../../interfaces/estadoCuenta.interface';
import { formatCurrency } from '@angular/common';
import * as moment from 'moment';
@Component({
  selector: 'app-resumen-general',
  templateUrl: './resumen-general.component.html',
  styleUrls: ['./resumen-general.component.scss'],
})
export class ResumenGeneralComponent implements OnInit {
  @Input() datosPersonales!: DatosPersonalesGeneral;
  @Input() datosAnaliticos!: DatosAnaliticos;

  aporteContenido!: any[];
  position!: string;
  displayPosition!: boolean;
  constructor() {}

  ngOnInit(): void {
    this.aporteContenido = [
      {
        titulo: 'Cant. aporte',
        valor: formatCurrency(
          this.datosAnaliticos.DAAN_aportes_monto,
          'py',
          '₲',
          'PYG',
          '1.0'
        ),
      },
      {
        titulo: 'Últ. Pagado',
        valor: moment(this.datosAnaliticos.DAAN_aportes_ult_pag, 'YYYY-MM-DD').format('DD-MM-YYYY'),
      },
      {
        titulo: 'Cant. Pendiente',
        valor: formatCurrency(
          this.datosAnaliticos.DAAN_aportes_cant_pend,
          'py',
          '₲',
          'PYG',
          '1.0'
        ),
      },
    ];
  }
  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }
}
