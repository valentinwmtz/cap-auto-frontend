import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL} from '../constants';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  public resourceUrl = SERVER_API_URL + '/auth';

  constructor(protected http: HttpClient, private router: Router) {
  }

  login(loginRequest) {
    this.isLoggedIn = false;
    this.http.post<any>(`${this.resourceUrl}/signin`, loginRequest, {observe: 'response'}).subscribe(response => {
      console.log(response);
      if (response.body.accessToken != null) {
        this.isLoggedIn = true;
        localStorage.setItem('token', response.body.accessToken);
        this.router.navigate(['/eleve']);
      } else {
        this.isLoggedIn = false;
      }
    });
  }
}
