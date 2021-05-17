import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './modulos/prime-ng/prime-ng.module';

import localePy from '@angular/common/locales/es-PY';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePy, 'py');


import { AppComponent } from './app.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { DatosLaboralesComponent } from './componentes/estado-cuenta-contenedor/datos-laborales/datos-laborales.component';
import { DatosPersonalesComponent } from './componentes/estado-cuenta-contenedor/resumen-general/datos-personales/datos-personales.component';
import { PrestamosComponent } from './componentes/estado-cuenta-contenedor/prestamos/prestamos.component';
import { ResumenGeneralComponent } from './componentes/estado-cuenta-contenedor/resumen-general/resumen-general.component';
import { TarjetasComponent } from './componentes/estado-cuenta-contenedor/tarjetas/tarjetas.component';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';
import { CajasCentralesComponent } from './componentes/estado-cuenta-contenedor/resumen-general/cajas-centrales/cajas-centrales.component';
import { AhorrosComponent } from './componentes/estado-cuenta-contenedor/ahorros/ahorros.component';
import { GestionCobranzaComponent } from './componentes/estado-cuenta-contenedor/gestion-cobranza/gestion-cobranza.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    DatosLaboralesComponent,
    DatosPersonalesComponent,
    PrestamosComponent,
    ResumenGeneralComponent,
    TarjetasComponent,
    FormatoFechaPipe,
    CajasCentralesComponent,
    AhorrosComponent,
    GestionCobranzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNgModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
