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

  aportesContenido!: any[];
  saldosContenido!: any[]
  constructor() {}

  ngOnInit(): void {
    this.aportesContenido = [
      {
        subTitulo1: 'Total',
        valor1: formatCurrency(
          this.datosAnaliticos.DAAN_aportes.APOR_monto,
          'py',
          '',
          'PYG',
          '1.0'
        ),
        subTitulo2: 'Últ. Pagado',
        valor2: moment(
          this.datosAnaliticos.DAAN_aportes.APOR_ult_pag,
          'YYYY-MM-DD'
        ).format('DD-MM-YYYY'),
        subTitulo3: 'Pendiente',
        valor3: formatCurrency(
          this.datosAnaliticos.DAAN_aportes.APOR_cant_pend,
          'py',
          '',
          'PYG',
          '1.0'
        ),
      },
    ];
    this.saldosContenido = [
      {
        subTitulo1: 'Préstamos',
        valor1: formatCurrency(
          this.datosAnaliticos.DAAN_saldos_pendientes.SAPE_prestamos,
          'py',
          '',
          'PYG',
          '1.0'
        ),
        subTitulo2: 'Cobranzas',
        valor2: formatCurrency(
          this.datosAnaliticos.DAAN_saldos_pendientes.SAPE_cobranzas,
          'py',
          '',
          'PYG',
          '1.0'
        ),
        subTitulo3: 'Tarjeta de crédito',
        valor3: formatCurrency(
          this.datosAnaliticos.DAAN_saldos_pendientes.SAPE_tarjetas,
          'py',
          '',
          'PYG',
          '1.0'
        ),
      },
    ];
  }
}
