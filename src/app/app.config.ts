import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TASK_API_PROVIDER } from './domain/task/infrastructure/providers/product-api.provider';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { USER_API_PROVIDER } from './domain/user/infrastructure/providers/user-api.provider';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),TASK_API_PROVIDER,USER_API_PROVIDER, provideAnimationsAsync()]
};
