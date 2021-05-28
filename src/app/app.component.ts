import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  EstadoCuenta,
  SocioSugerido,
} from './interfaces/estadoCuenta.interface';
import { FondoService } from './servicios/fondo.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'estadoCuenta';

  estadoCuenta!: EstadoCuenta;
  sociosSugeridos!: SocioSugerido[];
  socioSeleccionado!: SocioSugerido;
  prueba!: SocioSugerido[];
  // filteredCountries!: any[];

  hayError!: boolean;
  cargando: boolean = true;
  expandir: boolean = true;

  constructor(private _estadoCuenta: FondoService) {}

  // @ViewChild('identificador') identificador!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {}

  verSeleccionado(dato: any) {
    console.log(dato);
    console.log('seleccionado', this.socioSeleccionado);
  }
  autoCompletado(event: any) {
    this.cargando = true;
    let query = event.query;
    console.log('evento', event);
    this._estadoCuenta.devuelveIdentificador(query);
    this.cargaSociosSugeridos();
  }

  buscar(identificador: number) {
    if (this.socioSeleccionado) {
      this.cargando = false;
      // const identificador = dato.sosu_nro_cedula;
      this._estadoCuenta.pideEstadoCuenta(identificador).subscribe(
        (resp) => {
          this.estadoCuenta = resp;
          console.log(this.estadoCuenta);
          this.cargando = true;
        },
        (err) => {
          console.warn('Hay un error', err.message);
          this.hayError = true;
        }
      ).unsubscribe;
      console.log(identificador);
    }
  }

  imprimir() {
    window.print();
  }

  expandirTodo() {
    this.expandir = !this.expandir;
    let boton = document.getElementsByClassName(
      'p-button-text p-button-rounded p-button-plain'
    );
    for (const i in boton) {
      let element: HTMLElement = boton[i] as HTMLElement;
      element.click();
    }
  }

  cargaSociosSugeridos() {
    this._estadoCuenta
      .devuelveSociosSugeridos()
      .subscribe(
        (resp) => {
          this.sociosSugeridos = resp;
          console.log(resp);
          if (this.sociosSugeridos.length == 1)
            this.buscar(this.sociosSugeridos[0].sosu_nro_cedula);
        },
        (err) => {
          console.warn(err.message);
        }
      ).unsubscribe;
  }
  // cargaEstadoCuenta() {
  //   this._estadoCuenta.devuelveEstadoCuenta().subscribe(
  //     (resp) => {
  //       this.estadoCuenta = resp;
  //       console.log(this.estadoCuenta);
  //       this.cargando = true;
  //     },
  //     (err) => {
  //       console.warn('Hay un error', err.message);
  //       this.hayError = true;
  //     }
  //   ).unsubscribe;
  // }
}
