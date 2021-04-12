import { Component, Input, OnInit } from '@angular/core';
import { EstadoCuenta } from '../../../interfaces/prototipo';

@Component({
  selector: 'app-resumen-general',
  templateUrl: './resumen-general.component.html',
  styleUrls: ['./resumen-general.component.scss']
})
export class ResumenGeneralComponent implements OnInit {
  @Input() estadoCuenta? : EstadoCuenta
  aporteContenido: any[];
  constructor() {
    this.aporteContenido = [
      {titulo : 'Cant aporte', valor: '1.200.000'},
      {titulo : 'Ult. Pagado', valor: '2/04/2021'},
      {titulo : 'Cant Pendiente', valor: '540.000'},
    ]
   }

  ngOnInit(): void {
  }

}
