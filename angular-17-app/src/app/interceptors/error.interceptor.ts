import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, EMPTY } from 'rxjs';
import Snackbar from 'awesome-snackbar';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError((error)=>{
    new Snackbar(error.message);
    return EMPTY;
  }));
};
