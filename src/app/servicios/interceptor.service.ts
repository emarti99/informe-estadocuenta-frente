import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { Auth } from 'aws-amplify';
import { CargandoService } from './cargando.service';
@Injectable({
  providedIn: 'root',
})
export class IncerceptorService implements HttpInterceptor {
  constructor(private cargandoService: CargandoService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.cargandoService.mostrar();
    return from(Auth.currentSession())
      .pipe(
        switchMap((cognito_session) => {
          let auth_header: string = cognito_session.getIdToken().getJwtToken();
          let new_request: HttpRequest<any> = request.clone({
            setHeaders: {
              Authorization: auth_header,
            },
          });

          return next.handle(new_request).pipe(catchError(this.manejaError));
        })
      )
      .pipe(
        tap(
          (evento: HttpEvent<any>) => {
            if (evento instanceof HttpResponse) {
              this.cargandoService.esconder();
            }
          },
          (error) => {
            this.manejaError;
            this.cargandoService.esconder();
          }
        )
      );
  }

  manejaError(error: HttpErrorResponse) {
    console.warn(error);
    return throwError('Ha ocurrido un error');
  }
}
