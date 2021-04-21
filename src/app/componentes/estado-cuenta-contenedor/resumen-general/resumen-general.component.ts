import { Component, Input, OnInit } from '@angular/core';
import { EstadoCuenta } from '../../../interfaces/prototipo';
@Component({
  selector: 'app-resumen-general',
  templateUrl: './resumen-general.component.html',
  styleUrls: ['./resumen-general.component.scss'],
})
export class ResumenGeneralComponent implements OnInit {
  @Input() estadoCuenta!: EstadoCuenta;

  aporteContenido: any[];
  constructor() {
    this.aporteContenido = [
      { titulo: 'Cant aporte', valor: '1.200.000' },
      { titulo: 'Ult. Pagado', valor: '2/04/2021' },
      { titulo: 'Cant Pendiente', valor: '540.000' },
    ];
  }

  ngOnInit(): void {
    console.log( this.estadoCuenta )
    // this.socioDatos?.push(
    //   [this.estadoCuenta?.datos_personales].map((elm: any) => {
    //     return {
    //       DAPE_nombre: elm.DAPE_nombre,
    //       DAPE_cedula_nro: elm.DAPE_cedula_nro,
    //       DAPE_direccion: elm.DAPE_direccion,
    //       DAPE_telefono: elm.DAPE_telefono,
    //     };
    //   })
    // );
  }
}
