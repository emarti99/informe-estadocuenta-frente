import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CargandoService {
  visible!: BehaviorSubject<boolean>;
  constructor() {
    this.visible = new BehaviorSubject<boolean>(false);
  }

  mostrar() {
    this.visible.next(true);
  }

  esconder() {
    this.visible.next(false);
  }
  
}
