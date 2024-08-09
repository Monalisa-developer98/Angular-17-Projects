import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userId: number = 1;
  user: any;
  userDetailsSubscription: any;

  constructor(private http:HttpClient){}  // dependency injection

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  ngDoCheck(){
    // this.fetchUserDetails(); 
  }

  fetchUserDetails(){
    const url = `https://jsonplaceholder.typicode.com/users/${this.userId}`;  // api call
    this.userDetailsSubscription = this.http.get(url).subscribe((userResponse: any) => { 
      this.user = userResponse;  // userResponse cannot access html, so we kept the response in a class varible, inorder to use it in HTML.
    })
  }

  ngOnDestroy(){
    this.userDetailsSubscription.unsubscribe();  // unsubscribe the subscription to avoid memory leak
  }

}
