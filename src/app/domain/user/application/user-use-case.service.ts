import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_USER_SERVICE } from '../infrastructure/providers/user-api.provider';
import { IUserApiService } from '../infrastructure/user-api.interface';
import { IDomainRequestUser, IDomainResponseUser } from '../domain/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserUseCaseService{


  constructor(
    @Inject(HTTP_USER_SERVICE) private _userApiService: IUserApiService
  ) { }

  signIn(user: IDomainRequestUser) : Observable<IDomainResponseUser>{
    return this._userApiService.signIn(user);
  }

}
