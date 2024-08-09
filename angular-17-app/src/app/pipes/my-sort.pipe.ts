import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort',
  standalone: true
})
export class MySortPipe implements PipeTransform {

  transform(arr: any) {
    return arr.sort((a: number,b: number) => a - b);
  }

}
