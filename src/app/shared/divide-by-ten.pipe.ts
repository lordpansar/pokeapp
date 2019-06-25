import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
  name: 'divideByTen'
})

export class DivideByTenPipe implements PipeTransform {
  transform(value: number): number {
    return value / 10;
  }
}
