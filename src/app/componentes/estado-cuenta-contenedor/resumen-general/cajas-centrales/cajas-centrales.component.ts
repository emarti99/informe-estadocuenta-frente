import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-cajas-centrales',
  templateUrl: './cajas-centrales.component.html',
  styleUrls: ['./cajas-centrales.component.scss'],
})
export class CajasCentralesComponent implements OnInit {
  @Input() contenido!: any[];
  @Input() estado!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
