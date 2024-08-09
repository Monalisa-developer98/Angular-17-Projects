import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    return this.httpClient.get(url, { observe: 'response'}); // returns an observable
    // we will return observable here,, and subscribe in the component
    // observe will have: headers, params etc
    // this is HttpClient with Headers
  }
}
