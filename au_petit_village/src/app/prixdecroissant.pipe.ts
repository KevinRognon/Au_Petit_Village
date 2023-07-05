import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prixdecroissant'
})
export class PrixdecroissantPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
