import { Component, OnInit } from '@angular/core';
import { EstadoCuenta } from './interfaces/prototipo';
import { FondoService } from './servicios/fondo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'estadoCuenta';
  estadoCuenta?: EstadoCuenta | undefined;
  constructor(private _estadoCuenta: FondoService) {}
  ngOnInit(): void {
    this._estadoCuenta.pideDatoUsuario().subscribe((data: EstadoCuenta) => {
      this.estadoCuenta = data;
    }).unsubscribe;
  }
 
 
}
