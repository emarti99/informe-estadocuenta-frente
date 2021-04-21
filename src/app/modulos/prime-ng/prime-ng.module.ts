import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ScrollTopModule } from 'primeng/scrolltop';
import { BadgeModule } from 'primeng/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    TableModule,
    ButtonModule,
    CardModule,
    BadgeModule,
    ScrollTopModule,
    BrowserAnimationsModule,
    TooltipModule,
  ],
})
export class PrimeNgModule {}
