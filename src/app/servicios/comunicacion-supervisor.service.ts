import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class ComunicacionSupervisorService {
  constructor() {}
  comunicacionActiva: number = 0;
  hayError: any;

  supervisa<T>(supervisado: Observable<HttpEvent<T>>): Observable<T> {
    return supervisado.pipe(
      tap((e) => this.procesaEventosComunicacion(e)),
      filter((e) => e.type == HttpEventType.Response),
      map((e) => (e as HttpResponse<T>).body!),
      catchError((e) => {
        this.hayError = e;
        throw 'Error en comunicación supervisada';
      })
    );
  }

  procesaEventosComunicacion<T>(httpEvent: HttpEvent<T>) {
    switch (httpEvent.type) {
      case HttpEventType.Sent:
        this.comunicacionActiva++;
        break;
      case HttpEventType.Response:
        this.comunicacionActiva--;
        if (!(httpEvent as HttpResponse<T>).ok)
          this.hayError = httpEvent.statusText;
        break;
      default:
    }
  }
}
