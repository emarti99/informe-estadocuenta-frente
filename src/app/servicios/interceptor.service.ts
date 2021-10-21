import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FondoService } from './fondo.service';
@Injectable({
  providedIn: 'root',
})
export class IncerceptorService implements HttpInterceptor {
  constructor(private estado: FondoService) {}
  comunicacionActiva: number = 0;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // let new_request: HttpRequest<any> = request.clone();
    this.comunicacionActiva++;
    return next.handle(request).pipe(catchError(this.manejaError));
    // return from(Auth.currentSession()).pipe(
    //   switchMap((cognito_session) => {
    //     let auth_header: string = cognito_session.getIdToken().getJwtToken();
    //     // let new_request: HttpRequest<any> = request.clone({
    //       //   setHeaders: {
    //         //     Authorization: auth_header,
    //         //   },
    //         // });

    //         let new_request: HttpRequest<any> = request.clone();
    //     return next.handle(new_request).pipe(catchError(this.manejaError));
    //   })
    // );
  }

  manejaError(error: HttpErrorResponse) {
    console.warn(error);
    return throwError('Ha ocurrido un error');
  }
}
