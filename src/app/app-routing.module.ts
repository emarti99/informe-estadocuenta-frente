import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { EstadoCuentaContenedorComponent } from './componentes/estado-cuenta-contenedor/estado-cuenta-contenedor.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PrimeNgModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
