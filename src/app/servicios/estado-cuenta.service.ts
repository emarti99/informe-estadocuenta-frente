import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EstadoCuenta } from '../interfaces/prototipo';
import { FondoService } from './fondo.service';
@Injectable({
  providedIn: 'root',
})
export class EstadoCuentaService {
  estadoCuenta?: EstadoCuenta;
  constructor( private _http : FondoService) {}

  // muestraEstadoCuenta() {
  //   this._http.pideDatoUsuario.pipe(
  //     map((data) => {
  //       console.log(data);
  //     })
  //   );
  // }
}
