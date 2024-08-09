import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private ele:ElementRef ) { 
    console.log(ele)
  }

  highLight(color: string, bgColor: string){  // custom function
    this.ele.nativeElement.style.color = color;
    this.ele.nativeElement.style.backgroundColor = bgColor;
  } 

  @HostListener('mouseenter')
  onMouseEnter(){
    // console.log('Mouse enetered')
    this.highLight('red', 'yellow')
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    // console.log('Mouse left')
    this.highLight('black', 'white')
  }

}
