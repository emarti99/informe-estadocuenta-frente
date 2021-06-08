
import { Component, OnInit } from '@angular/core';
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
  socioSeleccionado!: SocioSugerido;

  hayError!: boolean;
  cargando: boolean = true;
  expandir: boolean = true;
  prueba: boolean = false;

  constructor(private _estadoCuenta: FondoService) {
    this.estadoCuenta = JSON.parse( localStorage.getItem( 'historial') ! )
  }

  ngOnInit(): void {
    // this._estadoCuenta.pideEstadoCuenta().subscribe(
    //   (resp) => {
    //     this.estadoCuenta = resp;
    //     console.log(this.estadoCuenta);
    //     this.cargando = true;
    //   },
    //   (err) => {
    //     console.warn('Hay un error', err.message);
    //     this.hayError = true;
    //   }
    // ).unsubscribe;
  }

  autoCompletado(event: any) {
    this.cargando = true;
    let query = event.query;
    this._estadoCuenta.devuelveIdentificador(query);
    this.cargaSociosSugeridos();
  }

  busca(identificador: number) {
    this.cargando = false;
    this._estadoCuenta.pideEstadoCuenta(identificador).subscribe(
      (resp) => {
        this.estadoCuenta = resp;
        this.cargando = this.expandir = true;
        localStorage.setItem( 'historial', JSON.stringify(this.estadoCuenta) );
      console.log( this.estadoCuenta );
      },
      (err) => {
        console.warn('Hay un error', err.message);
        this.hayError = true;
      }
    ).unsubscribe;
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
    this._estadoCuenta.devuelveSociosSugeridos().subscribe(
      (resp) => {
        this.sociosSugeridos = resp;
        if (this.sociosSugeridos.length == 1)
          this.busca(this.sociosSugeridos[0].sosu_nro_cedula);
      },
      (err) => {
        console.warn(err.message);
      }
    ).unsubscribe;
  }

}
