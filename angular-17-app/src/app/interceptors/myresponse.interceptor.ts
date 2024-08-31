import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const myresponseInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Pre Interceptor');

  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      
      if(event instanceof HttpResponse && event.status === 200){
        console.log('Post Interceptor - Success');
      }
      console.log('Post Interceptor - Any');
    })
  );
};
