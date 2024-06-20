import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable,map } from 'rxjs';
import { IDomainRequestTask, IDomainResponse, IDomainResponseTask } from '../domain/task.model';
import { IApiResponse, IApiResponseTask } from './models/task-api.model';
import { ITaskApiService } from './task-api.interface';

@Injectable()
export class TaskApiService implements ITaskApiService{

  private _http = inject(HttpClient);
  private readonly URL_TASKS =  environment.backend + '/task';

  getTasks( userId:number): Observable<IDomainResponseTask[]>{

    return this._http.get<IApiResponseTask[]>(`${this.URL_TASKS}/user/${userId}`).pipe(
      map((response)=> 
        response.map((taskApi)=>({
          id: taskApi.id,
          name: taskApi.name,
          state: taskApi.state,
        }))
      )
    );
  }

  createTask(newTask: IDomainRequestTask, userId:number): Observable<IDomainResponse>{

    return this._http
      .post<IApiResponse>(`${this.URL_TASKS}/user/${userId}`, newTask)
      .pipe(map((response)=>({ message: response.message, code: response.code})))
  }

  updateTask(task: IDomainResponseTask, id:number): Observable<IDomainResponse>{
    
    return this._http
      .put<IApiResponse>(`${this.URL_TASKS}/${id}`, task)
      .pipe(map((response)=>({ message: response.message, code: response.code})))
  }

  deleteTask(id: number): Observable<IDomainResponse>{
    
    return this._http
      .delete<IApiResponse>( `${this.URL_TASKS}/${id}`)
      .pipe(map((response)=>({ message: response.message, code: response.code})))
  }

}
