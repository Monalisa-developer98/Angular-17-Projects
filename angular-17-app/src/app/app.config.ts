import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// import { NgxPaginationModule } from 'ngx-pagination';

export const appConfig: any = {
  providers: [provideRouter(routes), provideHttpClient()],
};


// export const appConfig: any = {
//   imports: [NgxPaginationModule]
//   providers: [provideRouter(routes)]
// };


// if we add it here, we don't need to add in the individual components.

// ngx Pagination will be imported in individual components.
