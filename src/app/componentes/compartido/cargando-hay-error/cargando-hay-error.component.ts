import { Component, OnInit } from '@angular/core';
import { ComunicacionSupervisorService } from 'src/app/servicios/comunicacion-supervisor.service';

@Component({
  selector: 'app-cargando-hay-error',
  templateUrl: './cargando-hay-error.component.html',
  styleUrls: ['./cargando-hay-error.component.scss'],
})
export class CargandoHayErrorComponent implements OnInit {
  constructor(public comunicacionSupervisor: ComunicacionSupervisorService) {}

  ngOnInit(): void {}
  recarga(): void {
    location.reload();
  }
}
