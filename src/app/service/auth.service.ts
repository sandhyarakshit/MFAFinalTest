import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../model/loginResponse.model';
import { Router } from '@angular/router'; // Import Router for navigation
import { UserDataService } from './userdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7076';

  constructor(private http: HttpClient, private userdata: UserDataService, private router: Router) {}

  async login(username: string, password: string) {
    const loginData = {
      username: username,
      password: password,
      options: {
        multiOptionalFactorEnroll: true,
        warnBeforePasswordExpired: true,
      },
    };

    try {
      const response = await this.http.post<LoginResponse>(this.apiUrl + '/api/Auth/authenticate-user', loginData).toPromise();

      if (response?.status === 'SUCCESS') {

        return response;

      }
    } catch (error) {

      console.error('Login error:', error);
      return error;

    }
  }
}
