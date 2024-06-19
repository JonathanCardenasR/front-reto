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

  getTasks(){
    return this._taskApiService.getTasks();
  }

  createTask(newTask:IDomainRequestTask): Observable<IDomainResponse>{
    // Logica de negocio
    return this._taskApiService.createTask(newTask);
  }

  updateTask(task:IDomainResponseTask): Observable<IDomainResponse>{
    // Logica de negocio
    return this._taskApiService.updateTask(task);
  }

  deleteTask(id:number): Observable<IDomainResponse>{
    // Logica de negocio
    return this._taskApiService.deleteTask(id);
  }




}
