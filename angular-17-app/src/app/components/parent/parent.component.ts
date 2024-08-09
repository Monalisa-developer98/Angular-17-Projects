import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';
import { Child2Component } from '../child-2/child-2.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,  // Add HttpClientModule here
    Child1Component,
    Child2Component,
    CommonModule
  ],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']  // Corrected to styleUrls
})
export class ParentComponent {

  a: number;  // only declare it here, don't assign value here, always assign value inside constructor
  name: string;
  child2data: any;

  cars = ['tata', 'honda']

  @ViewChild('child2Ref') child2Obj:any;

  // Method to receive data from Child2 component
  receiveBData(data: any) {
    this.child2data = data;
  }

  // Constructor is used for initializing class variables and dependency injection
  constructor(private myhttp: HttpClient) {  // dependency injection
    // Constructor is the best place to initialize class variables.
    this.a = 200;
    this.name = 'Sachin';
    console.log('Parent constructor');
  }

  // Lifecycle methods

  ngOnInit(): void {  // When page loads, this method is invoked.
    console.log('OnInit Method invoked');

    // API call
    this.myhttp.get('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
      console.log(response);
    });
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('OnChanges Method invoked');
  // } 
}

