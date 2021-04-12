import { Component, Input, OnInit } from '@angular/core';
import { EstadoCuenta } from '../../../interfaces/prototipo';
import { FondoService } from '../../../servicios/fondo.service';

@Component({
  selector: 'app-datos-laborales',
  templateUrl: './datos-laborales.component.html',
  styleUrls: ['./datos-laborales.component.scss'],
})
export class DatosLaboralesComponent implements OnInit {
  // products: any[] = [
  //   {
  //     empresa: 'COOPERATIVA SAN CRISTOBAL',
  //     direccion: 'DENIS ROA Y DEL MAESTRO',
  //     telefono: '604868',
  //     salario: 7000000,
  //     fechaIngreso: '28-10-1998',
  //     fechaEgreso: '31-12-2006',
  //     fechaGrabacion: '19-11-2011',
  //   },
  //   {
  //     empresa: 'COOPERATIVA SAN CRISTOBAL',
  //     direccion: 'DENIS ROA Y DEL MAESTRO',
  //     telefono: '604868',
  //     salario: 7000000,
  //     fechaIngreso: '28-10-1998',
  //     fechaEgreso: '31-12-2006',
  //     fechaGrabacion: '19-11-2011',
  //   },
  //   {
  //     empresa: 'COOPERATIVA SAN CRISTOBAL',
  //     direccion: 'DENIS ROA Y DEL MAESTRO',
  //     telefono: '604868',
  //     salario: 7000000,
  //     fechaIngreso: '28-10-1998',
  //     fechaEgreso: '31-12-2006',
  //     fechaGrabacion: '19-11-2011',
  //   },
  //   {
  //     empresa: 'COOPERATIVA SAN CRISTOBAL',
  //     direccion: 'DENIS ROA Y DEL MAESTRO',
  //     telefono: '604868',
  //     salario: 7000000,
  //     fechaIngreso: '28-10-1998',
  //     fechaEgreso: '31-12-2006',
  //     fechaGrabacion: '19-11-2011',
  //   },
  //   {
  //     empresa: 'COOPERATIVA SAN CRISTOBAL',
  //     direccion: 'DENIS ROA Y DEL MAESTRO',
  //     telefono: '604868',
  //     salario: 7000000,
  //     fechaIngreso: '28-10-1998',
  //     fechaEgreso: '31-12-2006',
  //     fechaGrabacion: '19-11-2011',
  //   },
  // ];
  @Input() estadoCuenta?: EstadoCuenta;

  columnas?: any;

  constructor(private _estadoCuenta: FondoService) {}

  ngOnInit(): void {
    this.columnas = [
      {
        field: 'DALA_socio_empresa',
        header: 'Empresa',
      },
      {
        field: 'DALA_socio_direccion',
        header: 'Dirección',
      },
      {
        field: 'DALA_socio_telefono',
        header: 'Telefono',
      },
      {
        field: 'DALA_socio_salario',
        header: 'Salario',
      },
      {
        field: 'DALA_socio_fecha_ingreso',
        header: 'Fech. Ingreso',
      },
      {
        field: 'DALA_socio_fecha_egreso',
        header: 'Fech. Egreso',
      },
      {
        field: 'DALA_socio_fecha_grabacion',
        header: 'Fecha. Grabación',
      },
    ];
  }
}
