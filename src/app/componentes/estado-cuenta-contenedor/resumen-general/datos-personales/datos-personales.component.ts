import { Component, Input, OnInit } from '@angular/core';
import { EstadoCuenta } from 'src/app/interfaces/prototipo';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss'],
})
export class DatosPersonalesComponent implements OnInit {
  @Input() estadoCuenta?: EstadoCuenta;
  // datosPersonales: any[] = [
  //   {
  //     socio: 123456,
  //     nombre: 'Gustavo Elias Morán Martí',
  //     domicilio: 'Mcal Lopez y San Martin',
  //     conyuge: 'Fulana de tal',
  //     tasaPref: 2,
  //     telefono: 81123456,
  //     estado: 'activo',
  //     fechaIngreso: '24/enero/2021',
  //     ultimoAntecedente: 'ayer',
  //   },
  // ];
  DatoPersonalColumnaUno: any[] = [];
  DatoPersonalColumnaDos: any[] = [];
  constructor() {
   
  }

  ngOnInit(): void {
     if (this.estadoCuenta)
       this.DatoPersonalColumnaUno = [
         {
           titulo: 'Socio Nro',
           valor: this.estadoCuenta.datos_personales.DAPE_socio_nro,
         },
         {
           titulo: 'Nombre',
           valor: this.estadoCuenta.datos_personales.DAPE_nombre,
         },
         { titulo: 'Dirección', valor: this.estadoCuenta.datos_personales.DAPE_direccion },
         { titulo: 'Telefono', valor: this.estadoCuenta.datos_personales.DAPE_telefono },
       ];
     this.DatoPersonalColumnaDos = [
       { titulo: 'Estado', valor: this.estadoCuenta?.datos_personales.DAPE_estado },
       { titulo: 'Conyuge', valor: this.estadoCuenta?.datos_personales.DAPE_conyuge },
       { titulo: 'Tasa Pref', valor: this.estadoCuenta?.datos_personales.DAPE_tasa_pref },
       {
         titulo: 'Fecha de ingreso',
         valor: this.estadoCuenta?.datos_personales.DAPE_fecha_ingreso,
       },
       {
         titulo: 'Ultimo Antecedente',
         valor: this.estadoCuenta?.datos_personales.DAPE_ultimo_antecedente,
       },
     ];
  }
}
