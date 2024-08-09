import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { MySortPipe } from '../../pipes/my-sort.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    MySortPipe,
    OrdinalPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  name = 'Sachin tEnDulkAr';
  mySal = 5000;

  myDOB = new Date();

  user = {
    name: 'Sachin',
    age: 30,
    address: 'mumbai'
  };

  myMap = new Map();
  arr = [10, 20, 50, 40, 60];
  arr2 = [10, 20, 50, 40, 60];

  msg:string = ''

  constructor(){
    this.myMap.set('a', '10');
    this.myMap.set('b', '10');
  }

  number: number | null = null;

}
