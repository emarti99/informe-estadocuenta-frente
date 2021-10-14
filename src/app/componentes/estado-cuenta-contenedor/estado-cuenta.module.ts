import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoCuentaRoutingModule } from './estado-cuenta-routing.module';
import { EstadoCuentaComponent } from './estado-cuenta.component';
import { PrimeNgModule } from 'src/app/modulos/prime-ng/prime-ng.module';

@NgModule({
  declarations: [EstadoCuentaComponent],
  imports: [CommonModule, EstadoCuentaRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EstadoCuentaModule {}
