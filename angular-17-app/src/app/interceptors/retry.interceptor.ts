import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('I am Retry Interceptor') // if the api fails it will try another time, it will don't giveup.
  return next(req).pipe(retry(1)); // retry is a pipe in rxjs
};

// retry means if the api fails it will try one more time.