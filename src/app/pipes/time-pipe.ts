import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(secondes: number): string {
    let min = Math.floor(secondes / 60);
    let sec = secondes % 60;

    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }
}
