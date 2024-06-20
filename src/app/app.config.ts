import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TASK_API_PROVIDER } from './domain/task/infrastructure/providers/product-api.provider';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { USER_API_PROVIDER } from './domain/user/infrastructure/providers/user-api.provider';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AuthInterceptor } from './infrastructure/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withInterceptors([AuthInterceptor])),TASK_API_PROVIDER,USER_API_PROVIDER, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  JwtHelperService, provideAnimationsAsync()]
};
