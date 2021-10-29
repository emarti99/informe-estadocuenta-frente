import { Component } from '@angular/core';
import {
  EstadoCuenta,
  SocioSugerido,
} from 'src/app/interfaces/estadoCuenta.interface';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FondoService } from 'src/app/servicios/fondo.service';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.scss'],
})
export class EstadoCuentaComponent {
  estadoCuenta!: EstadoCuenta;
  sociosSugeridos!: SocioSugerido[];
  socioSeleccionado!: any;

  hayError!: boolean;
  cargando: boolean = false;
  constructor(
    private _estadoCuenta: FondoService,
    public cargandoService: CargandoService
  ) {
    this.estadoCuenta = JSON.parse(localStorage.getItem('historial')!);
  }

  // Borra la entrada del buscador
  limpiar(): void {
    this.socioSeleccionado = '';
  }

  // evento del autocompletado
  ultimaBusqueda!: string;
  autoCompletado(event: any) {
    let query = event.query;
    console.log(event.query);
    if (query == '') {
      this.cargaSociosSugeridos(this.ultimaBusqueda);
    } else {
      this.cargaSociosSugeridos(query);
      this.ultimaBusqueda = query;
    }
  }

  cargaSociosSugeridos(identificador: string) {
    this._estadoCuenta.devuelveIdentificador(identificador);
    this._estadoCuenta.devuelveSociosSugeridos().subscribe(
      (resp) => {
        console.log(resp);
        this.sociosSugeridos = resp;
        this.sociosSugeridos.find((elemento) => {
          elemento.socio_sugerido_input = identificador;
        });
      },
      (err) => {
        console.warn(err.message);
      }
    ).unsubscribe;
  }

  // busca el informe de estado de cuenta
  busca(identificador: number) {
    this._estadoCuenta.pideEstadoCuenta(identificador).subscribe(
      (resp) => {
        console.log(resp);
        this.estadoCuenta = resp;
        this.abrirCerrarFilasSecundarias = true;

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
