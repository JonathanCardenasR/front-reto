import { Observable } from "rxjs";
import { IDomainRequestTask, IDomainResponse, IDomainResponseTask } from "../domain/task.model";

export interface ITaskApiService {
    getTasks(userId:number): Observable<IDomainResponseTask[]>;
    createTask(task: IDomainRequestTask,userId:number): Observable<IDomainResponse>;
    updateTask(task: IDomainResponseTask,id:number): Observable<IDomainResponse>;
    deleteTask(id: number): Observable<IDomainResponse>;
}