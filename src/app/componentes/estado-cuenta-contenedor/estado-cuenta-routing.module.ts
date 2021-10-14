import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoCuentaComponent } from './estado-cuenta.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'informe-estado-cuenta', component: EstadoCuentaComponent },
      { path: '**', redirectTo: 'informe-estado-cuenta', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoCuentaRoutingModule {}
