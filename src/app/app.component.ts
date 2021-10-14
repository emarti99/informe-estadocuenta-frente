import { Component, ElementRef, ViewChild } from '@angular/core';
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
  valorInterno = 'prueba';
}
