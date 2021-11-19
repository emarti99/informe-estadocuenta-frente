import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { errorResponse } from '../interfaces/errorResponse.interface';
import { API, Auth } from "aws-amplify";
import {
  EstadoCuenta,
  SocioSugerido,
} from '../interfaces/estadoCuenta.interface';
import { ComunicacionSupervisorService } from './comunicacion-supervisor.service';
import { CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
@Injectable({
  providedIn: 'root',
})
export class FondoService {
  estadoCuenta!: EstadoCuenta;
  hayError!: boolean;

  user!: CognitoUserInterface;
  authState!: AuthState;
  constructor(private http: HttpClient) {}

  identificador!: string;

  set devuelveme(val: any) {
    this.identificador = val;
  }
  devuelveIdentificador(termino: string) {
    this.identificador = termino;
  }

  devuelveSociosSugeridos() {
    return this.pideSociosSugeridos(this.identificador);
  }

  async pideEstadoCuenta(identificador: number): Promise<EstadoCuenta> {
    const socio = identificador.toString();
    const apiName = 'ClonAPIEstadoCuentaCSC';
    const path = '/informe';
    const myInit = { 
      headers: {idToken: (await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}, 
      response: true,
      queryStringParameters: {  
      ci: socio,
      },
    };
    return await API
    .get(apiName, path, myInit)
    .then(response => {
      //console.log(response);
      return<EstadoCuenta> response.data;
    })
    .catch(error => {
      //throw error
      console.log("name from service", error.response.constructor.name)
      throw error.response
      return<EstadoCuenta> error.response;
      // let response:errorResponse = error.response
      // return <EstadoCuenta> error.response;
    });

  }

  async pideSociosSugeridos(identificador: string): Promise<SocioSugerido[]> {
    const sociosSugeridos = identificador.toString();
    const apiName = 'ClonAPIEstadoCuentaCSC';
    const path = '/sugerencias';
    const myInit = { 
      headers: {idToken: (await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}, 
      response: true,
      queryStringParameters: {  
      dato: sociosSugeridos,
      },
    };    
    return await API
    .get(apiName, path, myInit)
    .then(response => {
      //console.log(response);
      return <SocioSugerido[]> response.data;
    })
    .catch(error => {
      console.log(error.response);
      return <SocioSugerido[]> error.response;
    });
  }
}
