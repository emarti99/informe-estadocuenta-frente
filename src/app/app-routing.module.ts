import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { PrimeNgModule } from './modulos/prime-ng/prime-ng.module';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PrimeNgModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
