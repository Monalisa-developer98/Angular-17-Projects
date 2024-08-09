import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})

export class DataBindingComponent {
  name: string = 'Monalisa Mahanta';  // variable declaration inside a component class
  address: string = 'BBSR'
  img_url: string = 'https://static.toiimg.com/thumb/110200548/110200548.jpg?height=746&width=420&resizemode=76&imgsize=1403081';
  flag: boolean = false;

  num1: number = 20;
  num2: number = 30;

  isVisibility:boolean = true;

  f1(){
    alert('I am f1 function')
  }

  f2(){
    alert('I am f2 function')
  }

  addition(a: number, b: number){
    alert(a+b);
  }

  additionRef(num3: any, num4: any){
    alert(+num3 + +num4);
  }

  toggleVisibility() {
    this.isVisibility = !this.isVisibility;
  }

  maxChars: number = 100;
  inputText: string = '';

  get remainingChars(): number {
    return this.maxChars - this.inputText.length;
  }


  selectedCountry: string = 'AP'

}
