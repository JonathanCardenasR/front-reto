import { InjectionToken, Provider } from "@angular/core";
import { IUserApiService } from "../user-api.interface";
import { UserApiService } from "../user-api.service";

export const HTTP_USER_SERVICE = new InjectionToken<IUserApiService>('UserApiService');

export const USER_API_PROVIDER: Provider = { provide: HTTP_USER_SERVICE, useClass: UserApiService};