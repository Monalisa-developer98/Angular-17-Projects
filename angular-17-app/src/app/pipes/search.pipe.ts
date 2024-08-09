import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(inputArr: any, searchText: string){  /// it is mandatory that 1st should be input, 2nd should be argument
    if(!inputArr) return [];
    if(!searchText) return inputArr;

    const filteredArr = inputArr.filter((ele :any) => {
       return JSON.stringify(ele).includes(searchText);  /// ----- search
      // return ele[fieldName].includes(searchText)        /// ------ only search for title
    });
    return filteredArr;
  }

}
