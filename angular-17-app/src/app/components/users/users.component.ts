import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  constructor(private userService: UsersService){}

  ngOnInit(): void {
    const userObs = this.userService.getAllUsers();
    console.log(userObs);
    userObs.subscribe((res: any)=>{
      console.log(res);
      console.log("response.status: ", res.status);
      console.log("response.body: ", res.body);
    },
    (error: any) => {  // if error in subscription
      console.log(error);
    },
    () => { console.log('Completed') }  // this is called when the last chunk is received
  )
  }
  // component will subscribe the observable written in service
}