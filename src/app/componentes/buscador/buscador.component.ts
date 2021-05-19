import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FondoService } from '../../servicios/fondo.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  // @Input() identificador!: number;
  // identificador = new FormControl()
  
  constructor( ) { }

  ngOnInit(): void {
  }
  
  
}
