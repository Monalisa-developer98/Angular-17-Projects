import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true
})
export class RemainingPipe implements PipeTransform {

  // transform(input: string) {
  //   return 100 - input.length;
  // }

  // transform(input: string, maxLength: any = 100) {
  //   return maxLength - input.length;
  // }

  // <h5>Remaining: {{ msg | remaining }}</h5>  --- write this in html

  transform(input: string, maxLength: any) {
    console.log('remaining pipe is called...')
    return maxLength - input.length;
  }

}
