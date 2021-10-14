import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
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
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

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
    AutoCompleteModule,
    InputTextModule,
    ProgressSpinnerModule,
  ],
})
export class PrimeNgModule {}
