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
    console.log('mostrar', this.visible);
    this.visible.next(true);
  }

  esconder() {
    console.log('esconder', this.visible);
    this.visible.next(false);
  }
}
