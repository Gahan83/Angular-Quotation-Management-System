import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../model/Register';
import { Observable } from 'rxjs';
import { IApiRegister } from '../Interface/Register';
import { Login } from '../model/Login';
import { IApiLogin } from '../Interface/Login';
import { IUser } from '../Interface/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'https://projectapi.gerasim.in/api/RfqTracker/';
  loggedUserData?: IUser;

  constructor(private readonly http: HttpClient) {
    this.setUserData();
  }

  public setUserData() {
    const logUser = sessionStorage.getItem('RfqUser');
    if (logUser !== null) {
      this.loggedUserData = JSON.parse(logUser);
    }
  }

  onRegister(obj: Register): Observable<IApiRegister> {
    return this.http.post<IApiRegister>(this.apiUrl + 'Register', obj);
  }

  onLogin(obj: Login): Observable<IApiLogin> {
    return this.http.post<IApiLogin>(`${this.apiUrl}login`, obj);
  }
}
