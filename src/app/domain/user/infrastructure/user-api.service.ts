import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable,map } from 'rxjs';
import { IUserApiService } from './user-api.interface';
import { IDomainRequestUser, IDomainResponse, IDomainResponseUser } from '../domain/user.model';
import { IApiResponse, IApiResponseUser } from './models/user-api.model';

@Injectable()
export class UserApiService implements IUserApiService{

  private _http = inject(HttpClient);
  private readonly URL_USER =  environment.backend + '/users';
  private readonly URL_AUTH =  environment.backend + '/auth';


  getUsers(): Observable<IDomainResponseUser[]>{


    return this._http.get<IApiResponseUser[]>(this.URL_USER).pipe(
      map((response)=> 
        response.map((userApi)=>({
          id: userApi.id,
          username: userApi.username,
          password: userApi.password,
          state: userApi.state,
          token: userApi.token
        }))
      )
    );
  }

  createUser(newUser: IDomainRequestUser): Observable<IDomainResponse>{
    return this._http
      .post<IApiResponse>(this.URL_USER, newUser)
      .pipe(map((response)=>({ message: response.message, code: response.code})))
  }

  updateUser(user: IDomainResponseUser): Observable<IDomainResponse>{
    return this._http
      .put<IApiResponse>(this.URL_USER, user)
      .pipe(map((response)=>({ message: response.message, code: response.code})))
  }

  deleteUser(id: number): Observable<IDomainResponse>{
    return this._http
      .delete<IApiResponse>( `${this.URL_USER}/${id}`)
      .pipe(map((response)=>({ message: response.message, code: response.code})))
  }

  signIn(user: IDomainRequestUser): Observable<IDomainResponseUser>{
    return this._http
      .post<IApiResponseUser>( `${this.URL_AUTH}/signin`, user)
      .pipe(map((response)=>({ id: response.id, token: response.token, state: response.state, username: response.username, password: response.password})))
  }

}
