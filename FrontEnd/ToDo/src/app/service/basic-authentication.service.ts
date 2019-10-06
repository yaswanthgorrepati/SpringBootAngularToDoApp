import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.const';

export const TOKEN = 'token';
export const LOGGEDUSER = 'loggedUser';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      { headers: header }).pipe(
        map(
          data => {
            sessionStorage.setItem(LOGGEDUSER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    // console.log("Hello world bean");
  }

  executeJWTAuthenticationService(username, password) {
    return this.http.post<any>(`${API_URL}/authenticate`, {
      username,
      password
    }).pipe(
        map(
          data => {
            sessionStorage.setItem(LOGGEDUSER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
    // console.log("Hello world bean");
  }

  getLoggedUser() {
    return sessionStorage.getItem(LOGGEDUSER);
  }
  getAuthToken() {
    if (this.getLoggedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }
  isUserLogged() {
    const user = sessionStorage.getItem(LOGGEDUSER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(LOGGEDUSER);
    sessionStorage.removeItem(TOKEN);
  }
}
export class AuthenticationBean {
  constructor(public message: string) {}
}
