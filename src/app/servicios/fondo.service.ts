import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  devuelveIdentificador(termino: string) {
    this.identificador = termino;
  }

  devuelveSociosSugeridos() {
    return this.pideSociosSugeridos(this.identificador);
  }

  pideEstadoCuenta(identificador: number): Observable<EstadoCuenta> {
    const socio = identificador.toString();
    return this.comunicacion.supervisa(
      this.http.get<EstadoCuenta>(environment.apiEstadoCuentaUrl + 'informe?', {
        headers: { 'Content-Type': 'application/json' },
        observe: 'events',
        params: { ci: socio },
      })
    );
  }

  pideSociosSugeridos(identificador: string): Observable<SocioSugerido[]> {
    const sociosSugeridos = identificador.toString();

    return this.comunicacion.supervisa(
      this.http.get<SocioSugerido[]>(environment.apiEstadoCuentaUrl + 'sugerencias?', {
        headers: { 'Content-Type': 'application/json' },
        observe: 'events',
        params: { dato: sociosSugeridos },
      })
    );
  }
}
