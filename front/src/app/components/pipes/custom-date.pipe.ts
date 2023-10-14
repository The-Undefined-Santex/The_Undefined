import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      const dateParts = value.split('T')[0].split('-');
      return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    }
    return value;
  }
}