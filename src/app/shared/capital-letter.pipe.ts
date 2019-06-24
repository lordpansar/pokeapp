import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetter'
})

export class CapitalLetterPipe implements PipeTransform {
  transform(value: string): string {
    let characters = value.split('');
    characters[0] = characters[0].toUpperCase();
    return characters.join('');
    }
}
