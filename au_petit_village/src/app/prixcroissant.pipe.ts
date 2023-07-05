import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prixcroissant'
})
export class PrixcroissantPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
