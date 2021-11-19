import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {

  popup$!: BehaviorSubject<boolean>;
  bool_popup!: boolean;

  constructor( ) {this.popup$ = new BehaviorSubject<boolean>(false) }
  mostrar() {
    this.popup$.next(true);
    this.bool_popup = true;
  }

  esconder() {
    this.popup$.next(false);
  }
}

  
