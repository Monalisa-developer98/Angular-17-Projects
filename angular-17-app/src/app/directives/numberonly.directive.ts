import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[numberonly]',  // this will be the attribute type directive 
  standalone: true
})
export class NumberonlyDirective {

  constructor() {}

  @HostBinding('style.background-color') myBgColor:string = '';
  @HostBinding('style.color') myColor:string = '';

  @HostListener('keyup', ['$event']) 
  handleKeyUp(e: any) { // this is the listener function
    let regex = new RegExp(/^[0-9]*$/);
    if(!regex.test(e.target.value)){
      this.myBgColor = 'red';
      this.myColor = 'white';
    } else{
      this.myBgColor = 'cyan';
    }
  } // after writing host listener, immediately write the function... like this handleKeyUp written.

}
