import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderprefix',
  standalone: true
})
export class GenderPrefixPipe implements PipeTransform {

  transform(name: string, gender: string) {
    return gender == 'male' ? `Mr. ${name}` :  `Ms. ${name}`;
  }

}
