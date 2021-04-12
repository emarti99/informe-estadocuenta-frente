import { Component, OnInit } from '@angular/core';
import { faUser, faCalendarAlt, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icono-estado-cuenta',
  templateUrl: './icono-estado-cuenta.component.html',
  styleUrls: ['./icono-estado-cuenta.component.scss'],
})
export class IconoEstadoCuentaComponent implements OnInit {
  faUser = faUser;
  faCalendar = faCalendarAlt;
  faHandsHelping = faHandsHelping;
  constructor() {}

  ngOnInit(): void {}
}
