import { Component, OnInit } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { PipesComponent } from '../pipes/pipes.component';
import { EmployeeDirectivesComponent } from '../employee-directives/employee-directives.component';
import { ParentComponent } from '../parent/parent.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { Math3Component } from '../math3/math3.component';
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';
import { UsersComponent } from '../users/users.component';


@Component({
  selector: 'center-container',
  standalone: true,
  imports: [
    DataBindingComponent, 
    DirectivesComponent,
    ProductsComponent,
    MyModalComponent,
    PipesComponent,
    EmployeeDirectivesComponent,
    ParentComponent,
    EmployeeCrudComponent,
    UserDetailsComponent,
    Math1Component,
    Math2Component,
    Math3Component,
    TrafficLightComponent,
    UsersComponent
  ],
  templateUrl: './center-div.component.html',
  styleUrl: './center-div.component.css'
})
export class CenterDivComponent {
  
  constructor() {}

}
