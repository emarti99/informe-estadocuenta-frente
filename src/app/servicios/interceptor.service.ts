import { Injectable } from '@angular/core';
import axios from 'axios';
import { CargandoService } from './cargando.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private cargandoService: CargandoService) { }

  intercept(){
    console.log("fuera del interceptor");
    axios.interceptors.request.use(request => {
      console.log("dentro del interceptor request");
      this.cargandoService.mostrar();
      return request;
    }, errorObject => {
      console.log("error");
      console.log(errorObject.response);
      this.cargandoService.esconder();
      return Promise.reject(errorObject.response);
    });

    axios.interceptors.response.use(response => {
      console.log("dentro del interceptor response");
      this.cargandoService.esconder();
      return response;
    }, errorObject => {
      console.log("error 2");
      console.log(errorObject.response.status);
      this.cargandoService.esconder();
      return Promise.reject(errorObject.response);
    });

    
  }
}

export function Intercepta(llamaIntercept: InterceptorService): any {
  return () => llamaIntercept.intercept();
}
