import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClientModule
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
    routes),
    provideHttpClient(),
     // Explicitly specify type as any
  ]
};