import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EstadoCuenta } from './interfaces/estadoCuenta.interface';
import { FondoService } from './servicios/fondo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'estadoCuenta';
  estadoCuenta!: EstadoCuenta;
  hayError!: boolean;
  cargando!: boolean;

  constructor(private _estadoCuenta: FondoService) {}

  @ViewChild('identificador') identificador!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {} 
  
  buscar( termino: number ) {
    this.cargando = false;
    this._estadoCuenta.devuelveIdentificador(termino);
    this.cargaDatos();
  }

  cargaDatos(){
    this._estadoCuenta.devuelveEstado().subscribe(
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
}
