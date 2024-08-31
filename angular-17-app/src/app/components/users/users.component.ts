import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User, UserModel } from '../../models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  // users: any[] = [];
  users: User[] = [];
  constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response: User[]) => {
      this.users = response;
      console.log(response); // array of objects
      // but our expectation is array of employees
    })

  }
  // component will subscribe the observable written in service
}