import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { DatosPersonalesComponent } from './componentes/estado-cuenta-contenedor/datos-personales/datos-personales.component';
import { DatosLaboralesComponent } from './componentes/estado-cuenta-contenedor/datos-laborales/datos-laborales.component';
import { PrestamosComponent } from './componentes/estado-cuenta-contenedor/prestamos/prestamos.component';
import { TarjetasComponent } from './componentes/estado-cuenta-contenedor/tarjetas/tarjetas.component';
import { EstadoCuentaContenedorComponent } from './componentes/estado-cuenta-contenedor/estado-cuenta-contenedor.component';
import { OtrosDatosComponent } from './componentes/estado-cuenta-contenedor/otros-datos/otros-datos.component';
import { ResumenGeneralComponent } from './componentes/estado-cuenta-contenedor/resumen-general/resumen-general.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    DatosPersonalesComponent,
    DatosLaboralesComponent,
    PrestamosComponent,
    TarjetasComponent,
    EstadoCuentaContenedorComponent,
    OtrosDatosComponent,
    ResumenGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
