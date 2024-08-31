import { HttpInterceptorFn } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // const myToken = localStorage.getItem('myToken');
  const myToken = 'My Demo Token';
  const isLoggedIn = true; // A flag to check if the user is logged in
  const userService = Inject(UsersService); // Injecting the UsersService
  console.log(userService)

  if(isLoggedIn){
    const updatedReq = req.clone({
      setHeaders: {
        'MyTestHeader': `Bearer ${myToken}`
      }
    })
    return next(updatedReq);
  } else {
    return next(req);
  }

};

//if (isLoggedIn) Condition:

// If the user is logged in (isLoggedIn is true), the request is cloned and modified to include an additional header (MyTestHeader) with the token.
// req.clone({ setHeaders: { 'MyTestHeader': Bearer ${myToken} } }): This clones the original request and adds a header MyTestHeader with the token as its value.
// return next(updatedReq);:

// The modified request (updatedReq) is passed to the next handler in the chain.
// else Block:

// If the user is not logged in (isLoggedIn is false), the original request is passed along without any modification.