import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return moment(value, "YYYY-MM-DD").format("DD-MM-YYYY");
  }

}
