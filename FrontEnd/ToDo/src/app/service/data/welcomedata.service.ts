import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.const';

export class HelloWorldBean {
  constructor(public message: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBean() {
    return this.http.get<HelloWorldBean>(`${API_URL}/helloworldbean`);
    // console.log("Hello world bean");
  }

  executeHelloWorldBeanWithParameters(name) {
    // const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // const header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // } );
    return this.http.get<HelloWorldBean>(`${API_URL}/helloworldbean/pathvariable/${name}`
    // {headers: header}
    );
    // console.log("Hello world bean");
  }
  // createBasicAuthenticationHttpHeader() {
  //   const userName = 'nakedbottoms';
  //   const password = 'dummy';
  //   const basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
// [CORS] The origin 'http://localhost:4200' did not find
// 'http://localhost:4200' in the Access-Control-Allow-Origin
// response header for cross-origin  resource at
// 'http://localhost:8080/helloworldbean/pathvariable/nakedbottoms'.

// HTTP401: DENIED - The requested resource requires user authentication.
// (XHR)OPTIONS - http://localhost:8080/helloworldbean/pathvariable/nakedbottoms
