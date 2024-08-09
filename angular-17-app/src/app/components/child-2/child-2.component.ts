import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, input } from '@angular/core';

@Component({
  selector: 'app-child-2',
  standalone: true,
  imports: [],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css',
  inputs: ['cars'],
  outputs: ['bEvent'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component {
  @Input() aChild2: any;
  b = 50;

  cars: any;  

  constructor(private cdr:ChangeDetectorRef){}

  // create a event
  bEvent = new EventEmitter()

// when we want to send data to parent, we will use event binding
  sendDataToParent(){
    this.bEvent.emit(this.b); // i will expose some data. // when we trigger a event from child component,, mention in outputs array
  }

  refresh(){
    this.cdr.markForCheck();
  }

  // ngDoCheck(){
  //   this.cdr.markForCheck();
  // }

}
