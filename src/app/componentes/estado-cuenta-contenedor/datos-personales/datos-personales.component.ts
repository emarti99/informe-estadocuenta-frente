import { Component, OnInit } from '@angular/core';
import { DatosPersonales } from 'src/app/interfaces/prototipo';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss'],
})
export class DatosPersonalesComponent implements OnInit {
  datosPersonales: DatosPersonales[] = [
    {
      socio: 123456,
      nombre: 'Nitdher Enrique Gonzalez Samudio',
      domicilio: 'micasa',
      conyugue: 'miesposa',
      tasaPref: 2,
      telefono: 81123456,
      estado: 'activo',
      fechaIngreso: '24/enero/2021',
      ultimoAntecedente: 'ayer',
    },
  ];
  DatoPersonalColumnaUno: any[];
  DatoPersonalColumnaDos: any[];
  constructor() {
    this.DatoPersonalColumnaUno = [
      { icono: 'pi pi-search', valor: this.datosPersonales[0].socio },
      { icono: 'pi pi-user', valor: this.datosPersonales[0].nombre },
      { icono: 'pi pi-home', valor: this.datosPersonales[0].domicilio },
      { icono: 'pi pi-phone', valor: '09' + this.datosPersonales[0].telefono },
    ];
    this.DatoPersonalColumnaDos = [
      { titulo: 'Estado', valor: this.datosPersonales[0].estado },
      { titulo: 'Conyugue', valor: this.datosPersonales[0].conyugue },
      { titulo: 'Tasa Pref', valor: this.datosPersonales[0].tasaPref },
      {
        titulo: 'Fecha de ingreso',
        valor: this.datosPersonales[0].fechaIngreso,
      },
      {
        titulo: 'Ultimo Antecedente',
        valor: this.datosPersonales[0].ultimoAntecedente,
      },
    ];
  }

  ngOnInit(): void {}
}
