import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { NumberonlyDirective } from '../../directives/numberonly.directive';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    CommonModule, 
    NumberonlyDirective,
    HighlightDirective
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  flag:boolean = false
  n = 4;
  number = 5;

  cars = ['tata', 'Honda', 'Maruti', 'Hyundai', 'Mahindra'];

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];

  employeeColumns = Object.keys(this.employees[0]);

  addEmployee(){
    this.employees = [
      { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
      { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
      { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
      { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
    { eId: 110, name: 'Pushpa', sal: 10000, gender: 'female' },
    ];
  }

  // improve performance by trackBy
  empoyeeTrackById(emp: any) {
    return emp.eId;
  }


  style1 = {
    color: 'red', border: '5px solid red'
  }

  style2 = {color: 'green', border: '5px solid green'}

  myClasses = {
    'm-2': true, 'p-2': false
  }

  getClasses(){
    return this.myClasses;
  }

  students:any = [];

// https://sweetalert2.github.io/ --- reference for sweetAlert
  openAlert(){
    // Swal.fire('Good job!', 'You clicked the button!', 'success');
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

}
