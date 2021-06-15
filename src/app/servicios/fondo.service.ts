import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {
  EstadoCuenta,
  SocioSugerido,
} from '../interfaces/estadoCuenta.interface';
import { ComunicacionSupervisorService } from './comunicacion-supervisor.service';

@Injectable({
  providedIn: 'root',
})
export class FondoService {
  estadoCuenta!: EstadoCuenta;
  hayError!: boolean;

  constructor(
    private http: HttpClient,
    private comunicacion: ComunicacionSupervisorService
  ) {}

  identificador!: string;
  urlBase: string = 'http://192.168.100.171:8080/api/v1/';

  devuelveIdentificador(termino: string) {
    this.identificador = termino;
  }

  devuelveSociosSugeridos() {
    return this.pideSociosSugeridos(this.identificador);
  }

  pideEstadoCuenta(identificador: number): Observable<EstadoCuenta> {
    const socio = identificador.toString();
    return this.comunicacion.supervisa(
      this.http.get<EstadoCuenta>(this.urlBase + 'informe?', {
        headers: { 'Content-Type': 'application/json' },
        observe: 'events',
        params: { ci: socio },
      })
    );
  }

  pideSociosSugeridos(identificador: string): Observable<SocioSugerido[]> {
    const sociosSugeridos = identificador.toString();

    return this.comunicacion.supervisa(
      this.http.get<SocioSugerido[]>(this.urlBase + 'sugerencias?', {
        headers: { 'Content-Type': 'application/json' },
        observe: 'events',
        params: { dato: sociosSugeridos },
      })
    );
  }
}
