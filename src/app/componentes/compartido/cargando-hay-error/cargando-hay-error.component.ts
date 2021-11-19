import { Component, OnInit } from '@angular/core';
import { ComunicacionSupervisorService } from 'src/app/servicios/comunicacion-supervisor.service';
import { Auth } from 'aws-amplify';
import { ErrorInterceptorService } from '../../../servicios/error-interceptor.service';

@Component({
  selector: 'app-cargando-hay-error',
  templateUrl: './cargando-hay-error.component.html',
  styleUrls: ['./cargando-hay-error.component.scss'],
})
export class CargandoHayErrorComponent implements OnInit {

  constructor(public comunicacionSupervisor: ComunicacionSupervisorService, 
    private errorInterceptorService: ErrorInterceptorService) {}

    popup$= this.errorInterceptorService.popup$;

  ngOnInit(): void {}

  recarga(): void {
    location.reload();

  }

  vuelveALoguin() {
    console.log("vuelveALoguin")
  }

  async CierraSesion() {
    console.log("signed out");
    try {
        await Auth.signOut({ global: true });
        location.reload();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
}


