import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child-1',
  standalone: true,
  imports: [],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css',
  inputs: ['aChild'],
})
export class Child1Component {
  aChild: any;

  constructor(){
    console.log('Child1Component constructor');
  }
  ngOnChanges(myChanges: SimpleChange){
    console.log('Child1Component onChanges');
    console.log(myChanges);
  }
  ngOnInit(){
    console.log('Child1Component onInit');
  }
}