import { Component, Input, OnInit } from '@angular/core';
import { DatosPersonales } from 'src/app/interfaces/prototipo';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss'],
})
export class DatosPersonalesComponent implements OnInit {
  @Input() datosPersonales!: DatosPersonales;
  @Input() estado!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
 