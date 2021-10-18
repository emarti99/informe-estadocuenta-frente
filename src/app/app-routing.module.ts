import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './modulos/prime-ng/prime-ng.module';

const routes: Routes = [
  {
    path: 'CSC',
    component: AppComponent,
  },
  { path: '**', redirectTo: 'CSC', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PrimeNgModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
