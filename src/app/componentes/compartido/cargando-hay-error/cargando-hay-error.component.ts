import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { ErrorInterceptorService } from '../../../servicios/error-interceptor.service';

@Component({
  selector: 'app-cargando-hay-error',
  templateUrl: './cargando-hay-error.component.html',
  styleUrls: ['./cargando-hay-error.component.scss'],
})
export class CargandoHayErrorComponent{

  constructor(private errorInterceptorService: ErrorInterceptorService) {}
  
  popup$= this.errorInterceptorService.popup$;
  dialogCloseButton:any;

  llamaLogout(){
    this.dialogCloseButton = document.querySelector('.p-dialog-header-close')
    this.dialogCloseButton.addEventListener('click', this.CierraSesion)
    setTimeout(this.CierraSesion, 10000)
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


