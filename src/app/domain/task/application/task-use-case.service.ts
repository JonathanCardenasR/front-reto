import { Inject, Injectable } from '@angular/core';
import { ITaskApiService } from '../infrastructure/task-api.interface';
import { HTTP_TASK_SERVICE } from '../infrastructure/providers/product-api.provider';
import { IDomainRequestTask, IDomainResponse, IDomainResponseTask } from '../domain/task.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskUseCaseService{


  constructor(
    @Inject(HTTP_TASK_SERVICE) private _taskApiService: ITaskApiService
  ) { }

  getTasks(userId:number) : Observable<IDomainResponseTask[]>{
    return this._taskApiService.getTasks(userId);
  }

  createTask(newTask:IDomainRequestTask,userId:number): Observable<IDomainResponse>{
    // Logica de negocio
    return this._taskApiService.createTask(newTask,userId);
  }

  updateTask(task:IDomainResponseTask,id:number): Observable<IDomainResponse>{
    // Logica de negocio
    return this._taskApiService.updateTask(task,id);
  }

  deleteTask(id:number): Observable<IDomainResponse>{
    // Logica de negocio
    return this._taskApiService.deleteTask(id);
  }




}
