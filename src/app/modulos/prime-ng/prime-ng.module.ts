import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ScrollTopModule } from 'primeng/scrolltop';
import { BadgeModule } from 'primeng/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';

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
    FieldsetModule,
    DialogModule,
    SkeletonModule,
    InputNumberModule,
    RippleModule,
  ],
})
export class PrimeNgModule {}
