import { Injectable, ErrorHandler } from '@angular/core';
import { ComunicacionSupervisorService } from './comunicacion-supervisor.service';
@Injectable({
  providedIn: 'root'
})

export class CustomErrorHandlerService implements ErrorHandler{

    constructor(public comunicacionSupervisor: ComunicacionSupervisorService) {}
  handleError(error:any){
    console.error(error)
    if (error.promise && error.rejection){
        console.log("promise and rejection exists")
        error = error.promise
        console.dir(error)
        error
        .then((response:any) => {
          console.log('.then')
        })
      .catch((err:any) => {
        this.comunicacionSupervisor.hayError = true
        console.log(this.comunicacionSupervisor.hayError, 'service hayError')
        console.log('error .catch')
        // console.log('error keys', Object.getOwnPropertyNames(err))
        // console.log(err.status)

      })
    }  else{
        //Backend returns unsuccessful response codes such as 404, 500 etc.
        console.error('another error')
      }
    }
    } ;
    
    // let response:errorResponse = error.response
    // switch (response.status){
    //   case 403:
    //     console.warn("No tienes permisos suficientes para ver esta informacion");
    //     break;
    //   default:
    //     console.warn("Error:", response.status)
    // }
