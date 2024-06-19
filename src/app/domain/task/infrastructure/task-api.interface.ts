import { Observable } from "rxjs";
import { IDomainRequestTask, IDomainResponse, IDomainResponseTask } from "../domain/task.model";

export interface ITaskApiService {
    getTasks(): Observable<IDomainResponseTask[]>;
    createTask(task: IDomainRequestTask): Observable<IDomainResponse>;
    updateTask(task: IDomainResponseTask): Observable<IDomainResponse>;
    deleteTask(id: number): Observable<IDomainResponse>;
}