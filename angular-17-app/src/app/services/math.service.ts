import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MathService {
  a = 10;
  b = 20;
  private c = 30;

  add(){
    return this.a + this.b;
  }
  sub(){
    return this.a - this.b;
  }
  mul(){
    return this.a * this.b;
  }
  
  constructor(private http: HttpClient) { } // a service has constructor() bcoz,, one service can inject another service.
} 