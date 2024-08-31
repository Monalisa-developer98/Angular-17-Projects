import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { logInterceptor } from './interceptors/log.interceptor';
import { retryInterceptor } from './interceptors/retry.interceptor';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
// import { NgxPaginationModule } from 'ngx-pagination';

export const appConfig: any = {
  providers: [provideRouter(routes), 
    provideHttpClient(withInterceptors([
      logInterceptor, 
      retryInterceptor,
      tokenInterceptor,
      loadingInterceptor,
      errorInterceptor
    ]))],
};


// export const appConfig: any = {
//   imports: [NgxPaginationModule]
//   providers: [provideRouter(routes)]
// };


// if we add it here, we don't need to add in the individual components.

// ngx Pagination will be imported in individual components.
