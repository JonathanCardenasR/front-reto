import { Observable } from "rxjs";
import { IDomainRequestUser, IDomainResponse, IDomainResponseUser } from "../domain/user.model";


export interface IUserApiService {
    getUsers(): Observable<IDomainResponseUser[]>;
    createUser(newUser: IDomainRequestUser): Observable<IDomainResponse>;
    updateUser(user: IDomainResponseUser): Observable<IDomainResponse>;
    deleteUser(id: number): Observable<IDomainResponse>;
    signIn(user: IDomainRequestUser): Observable<IDomainResponseUser>;
}