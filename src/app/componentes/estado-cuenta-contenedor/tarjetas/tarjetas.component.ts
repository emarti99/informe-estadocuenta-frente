import { Component, Input, OnInit } from '@angular/core';
import { Tarjetas } from 'src/app/interfaces/estadoCuenta.interface';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent implements OnInit {
  @Input() tarjetas!: Tarjetas[];

  constructor() {}

  ngOnInit(): void {
  
  }
}
