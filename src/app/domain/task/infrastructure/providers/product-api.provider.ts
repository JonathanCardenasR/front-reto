import { InjectionToken, Provider } from "@angular/core";
import { ITaskApiService } from "../task-api.interface";
import { TaskApiService } from "../task-api.service";

export const HTTP_TASK_SERVICE = new InjectionToken<ITaskApiService>('TaskApiService');

export const TASK_API_PROVIDER: Provider = { provide: HTTP_TASK_SERVICE, useClass: TaskApiService};