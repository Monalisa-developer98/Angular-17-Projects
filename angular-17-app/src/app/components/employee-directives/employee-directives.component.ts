import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { GenderPrefixPipe } from '../../pipes/gender-prefix.pipe';

@Component({
  selector: 'app-employee-directives',
  standalone: true,
  imports: [
    CommonModule,
    GenderPrefixPipe
  ],
  templateUrl: './employee-directives.component.html',
  styleUrl: './employee-directives.component.css'
})
export class EmployeeDirectivesComponent {

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];

  employeeColumns = Object.keys(this.employees[0]); 

  viewDetails(emp: any): void {
    Swal.fire({
      title: 'Employee Details',
      html: `
        <p><strong>ID:</strong> ${emp.eId}</p>
        <p><strong>Name:</strong> ${emp.name}</p>
        <p><strong>Salary:</strong> ${emp.sal}</p>
        <p><strong>Gender:</strong> ${emp.gender}</p>
      `,
      icon: 'info',
      confirmButtonText: 'Close'
    });
  }

  delete(eId: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(emp => emp.eId !== eId); // if false delete from array
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }


  addEmployee(id: any, name: string, salary: any, gender: string): void {
    if (id && name && salary && gender) {
      const newEmployee = {
        eId: id,
        name: name,
        sal: salary,
        gender: gender
      };
      this.employees.push(newEmployee);

      // Show success message
      Swal.fire({
        title: 'Success',
        text: 'Employee added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all fields',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
  

}
