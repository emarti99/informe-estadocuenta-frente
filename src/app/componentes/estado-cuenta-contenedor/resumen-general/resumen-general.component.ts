import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  DatosAnaliticos,
  DatosPersonalesGeneral,
} from '../../../interfaces/estadoCuenta.interface';
import { formatCurrency } from '@angular/common';
@Component({
  selector: 'app-resumen-general',
  templateUrl: './resumen-general.component.html',
  styleUrls: ['./resumen-general.component.scss'],
})
export class ResumenGeneralComponent implements OnInit, OnChanges {
  @Input() datosPersonales!: DatosPersonalesGeneral;
  @Input() datosAnaliticos!: DatosAnaliticos;

  aportesContenido!: any[];
  saldosContenido!: any[];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.aportesContenido = [
      {
        subTitulo1: 'Total',
        valor1: formatCurrency(
          this.datosAnaliticos.datos_analiticos_aportes.aportes_monto,
          'py',
          '₲',
          'PYG',
          '1.0'
        ),
        subTitulo2: 'Últ. Pagado',
        valor2: this.datosAnaliticos.datos_analiticos_aportes.aportes_ult_pag,
        subTitulo3: 'Pendiente',
        valor3: formatCurrency(
          this.datosAnaliticos.datos_analiticos_aportes.aportes_cant_pend,
          'py',
          '₲',
          'PYG',
          '1.0'
        ),
      },
    ];

    this.saldosContenido = [
      {
        subTitulo1: 'Préstamos',
        valor1: formatCurrency(
          this.datosAnaliticos.datos_analiticos_saldos_pendientes
            .saldos_pendientes_prestamos,
          'py',
          '₲',
          'PYG',
          '1.0'
        ),
        subTitulo2: 'Cobranzas',
        valor2: formatCurrency(
          this.datosAnaliticos.datos_analiticos_saldos_pendientes
            .saldos_pendientes_cobranzas,
          'py',
          '₲',
          'PYG',
          '1.0'
        ),
        subTitulo3: 'Tarjeta de crédito',
        valor3: formatCurrency(
          this.datosAnaliticos.datos_analiticos_saldos_pendientes
            .saldos_pendientes_tarjetas,
          'py',
          '₲',
          'PYG',
          '1.0'
        ),
      },
    ];
  }

  ngOnInit(): void {}
}
