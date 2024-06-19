import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.dev';
import { Observable,map } from 'rxjs';
import { IDomainRequestTask, IDomainResponse, IDomainResponseTask } from '../domain/task.model';
import { IApiResponse, IApiResponseTask } from './models/task-api.model';
import { ITaskApiService } from './task-api.interface';

@Injectable()
export class TaskApiService implements ITaskApiService{

  private _http = inject(HttpClient);
  private readonly URL_TASKS =  environment.backend + '/tasks';

  getTasks(): Observable<IDomainResponseTask[]>{
    return this._http.get<IApiResponseTask[]>(this.URL_TASKS).pipe(
      map((response)=> 
        response.map((taskApi)=>({
          id: taskApi.id,
          name: taskApi.name,
          state: taskApi.state,
          created: taskApi.created,
          updated: taskApi.updated,
          completed: taskApi.completed,
          deleted: taskApi.deleted
        }))
      )
    );
  }

  createTask(newTask: IDomainRequestTask): Observable<IDomainResponse>{
    return this._http
      .post<IApiResponse>(this.URL_TASKS, newTask)
      .pipe(map((response)=>({ message: response.message, code: response.code})))
  }

  updateTask(task: IDomainResponseTask): Observable<IDomainResponse>{
    return this._http
      .put<IApiResponse>(this.URL_TASKS, task)
      .pipe(map((response)=>({ message: response.message, code: response.code})))
  }

  deleteTask(id: number): Observable<IDomainResponse>{
    return this._http
      .delete<IApiResponse>( `${this.URL_TASKS}/${id}`)
      .pipe(map((response)=>({ message: response.message, code: response.code})))
  }

}
