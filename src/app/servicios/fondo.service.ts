import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FondoService {
  constructor(private http: HttpClient) {}

  urlBase: string = 'http://localhost:8080/api/v1/estadoCuenta';

  pideDatosUsuario(identificador: number) {
    const usuario = identificador.toString();

    return this.http.get(this.urlBase, {
      headers: { 'Content-Type': 'application/json' },
      params: { identificadorCliente: usuario },
    });
  }
}


