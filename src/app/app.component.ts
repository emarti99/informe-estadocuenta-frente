import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'estadoCuenta';

  estadoCuenta!: EstadoCuenta;
  sociosSugeridos!: SocioSugerido[];
  socioSeleccionado!: SocioSugerido;

  hayError!: boolean;
  cargando: boolean = true;
  
  constructor(private _estadoCuenta: FondoService) {
    this.estadoCuenta = JSON.parse(localStorage.getItem('historial')!);
  }

  autoCompletado(event: any) {
    this.cargando = true;

    let query = event.query;
      this._estadoCuenta.devuelveIdentificador(query);
      this.cargaSociosSugeridos();
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

  busca(identificador: number) {
    this.cargando = false;
    this._estadoCuenta.pideEstadoCuenta(identificador).subscribe(
      (resp) => {
        this.estadoCuenta = resp;
        this.cargando = this.abrirCerrarFilasSecundarias = true;

        localStorage.setItem('historial', JSON.stringify(this.estadoCuenta));

        setTimeout(() => {
          document.getElementById('buscador')!.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }, 200);
      },
      (err) => {
        console.warn('Hay un error', err.message);
        this.hayError = true;
      }
    ).unsubscribe;
  }

  // boton impresión
  imprimir() {
    window.print();
  }

  // boton expandir/contraer
  abrirCerrarFilasSecundarias: boolean = true;
  abrirCerrarAcordeon: boolean = false;
  estado: number = 3;
  botonTexto: string = 'General';

  expandirContraer() {
    if (this.estado == 3) {
      this.abrirCerrarFilasSecundarias = this.abrirCerrarAcordeon = false;
      this.simulaClick();
      this.estado = 1;
      this.botonTexto = 'Detalle';
    } else if (this.estado == 1) {
      this.abrirCerrarAcordeon = this.abrirCerrarFilasSecundarias = true;
      this.simulaClick();
      this.estado = 2;
      this.botonTexto = 'Total';
    } else if (this.estado == 2) {
      this.abrirCerrarAcordeon = false;
      this.abrirCerrarFilasSecundarias = true;
      this.estado = 3;
      this.botonTexto = 'General';
    }
  }

  simulaClick() {
    let boton = document.getElementsByClassName(
      'p-button-text p-button-rounded p-button-plain'
    );

    for (let i = 0; i < boton.length; i++) {
      let element: HTMLElement = boton[i] as HTMLElement;
      element.click();
    }
  }
}
