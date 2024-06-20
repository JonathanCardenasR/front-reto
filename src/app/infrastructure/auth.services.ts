import { Injectable, inject } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    private jwtHelper = inject(JwtHelperService);

    isAuthenticated(): boolean {
        const token = localStorage.getItem('token-reto');
        return !this.jwtHelper.isTokenExpired(token);
      }


}