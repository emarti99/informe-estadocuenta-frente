import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value == null || value == '-') {
      return '-';
    }else {
      return moment(value).format("DD-MM-YYYY");
    }
  }
}
