import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User, UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  // Observable of UserModel Interface
  // getAllUsers(): Observable<UserModel[]>{
  //   const url = 'https://jsonplaceholder.typicode.com/users'
  //   // return this.httpClient.get(url, { observe: 'response'}); // returns an observable
  //   // we will return observable here,, and subscribe in the component
  //   // observe will have: headers, params etc
  //   // this is HttpClient with Headers
  //   return this.httpClient.get<UserModel[]>(url);  // it is returning observable of user array
  // }

getAllUsers2(): Observable<UserModel[]> {
  const url = 'https://jsonplaceholder.typicode.com/users'
  return this.httpClient.get<UserModel[]>(url);  // it is returning observable of user array
}

  // Observable of User class
  getAllUsers(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get<User[]>(url).pipe(
      map((responseArr: User[]) => {  
        console.log(responseArr, '--API response')
        return responseArr.map((responseObject: User)=>{  // converts response JS object to User object
          const {id, name, email, website} = responseObject;
          return new User(id, name, email, website);
        })
      })
    );
  }
} // (10) [User, User, User, User, User, User, User, User, User, User]
// we convert Array of Javascript object to Array of User Object.