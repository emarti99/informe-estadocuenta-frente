import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { BadgeModule } from 'primeng/badge';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    TableModule,
    ButtonModule,
    CardModule,
    BadgeModule
  ]
})
export class PrimeNgModule { }
