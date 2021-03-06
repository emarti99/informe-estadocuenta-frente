import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatoFecha',
})
export class FormatoFechaPipe implements PipeTransform {
  transform(value: any): string {
    if (value == null || value == '-' || value=='1900-01-01T03:50:40.000+00:00') return '-';
    else return moment(value).format("DD-MM-YYYY");
  }
}
