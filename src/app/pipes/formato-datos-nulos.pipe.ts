import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoDatosNulos',
})
export class FormatoDatosNulosPipe implements PipeTransform {
  transform(value: any): string {
    if (value == null || value == '0 años  0 meses' || value == 0)  {
      return '-';
    } else {
      return value;
    }
  }
}
