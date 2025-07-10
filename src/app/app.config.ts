import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { mockLoginInterceptor } from './interceptor/loginInterceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([mockLoginInterceptor])),
    provideAnimations(),
  ],
};