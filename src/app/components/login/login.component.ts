import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LoginResponse } from 'src/app/model/loginResponse.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  loginData! : LoginResponse ;
  private apiUrl = 'https://localhost:7076';

  constructor(private authService: AuthService, private router: Router, private http : HttpClient) {}

  async onSubmit(){
    try {
      const loginData = {
        username: this.username,
        password: this.password,
        options: {
          multiOptionalFactorEnroll: true,
          warnBeforePasswordExpired: true,
        },
      };

      const response = await this.http.post<LoginResponse>(this.apiUrl + '/api/Auth/authenticate-user', loginData).toPromise();
      console.log(response);
      if(response?.status=='SUCCESS')
      {
          const userId = response.embedded.user.id ;
          console.log('Post userId Response:', userId);
          this.router.navigate(['/enroll', userId]);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

}
