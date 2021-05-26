import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  EstadoCuenta,
  SocioSugerido,
} from './interfaces/estadoCuenta.interface';
import { FondoService } from './servicios/fondo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'estadoCuenta';

  estadoCuenta!: EstadoCuenta;
  sociosSugeridos!: SocioSugerido[];
  socioSeleccionado: any;
  // filteredCountries!: any[];
  
  hayError!: boolean;
  cargando: boolean = true;
  expandir: boolean = true;

  constructor(private _estadoCuenta: FondoService) {}

  @ViewChild('identificador') identificador!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {}

  verSeleccionado() {
    console.log( 'seleccionado', this.socioSeleccionado )
  }
  autoCompletado(event: any) {

    let query = event.query;
    console.log('evento', event);
    this._estadoCuenta.devuelveIdentificador(query);
    this.cargaSociosSugeridos()

    // console.log('filtrados', this.filteredCountries);
  }

  buscar() {
    const termino = this.identificador.nativeElement.value;
    console.log(termino.length);
    // if (termino.length == 1) {
    //   this.cargando = false;
    //   this._estadoCuenta.devuelveIdentificador(termino);
    //   this.cargaSociosSugeridos();
    //   console.log('aviso');
    // } else {
    //   console.log('No hay nada');
    // }
    // setTimeout(() => {
    //   this.autoCompletado(termino);
    //   console.log('filterCountry');
    // }, 6000);
    // this.cargaEstadoCuenta();
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

  cargaEstadoCuenta() {
    this._estadoCuenta.devuelveEstadoCuenta().subscribe(
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
  }

  cargaSociosSugeridos() {
    this._estadoCuenta.devuelveSociosSugeridos().subscribe(
      (resp) => {
        this.sociosSugeridos = resp;
        console.log(this.sociosSugeridos);
      },
      (err) => {
        console.warn(err.message);
      }
    ).unsubscribe;
  }
}
