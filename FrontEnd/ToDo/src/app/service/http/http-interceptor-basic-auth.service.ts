import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // const userName = 'nakedbottoms';
    // const password = 'dummy';
    // const basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);
    const basicAuthHeaderString = this.basicAuthenticationService.getAuthToken(); 
    const  userName = this.basicAuthenticationService.getLoggedUser();
    if (basicAuthHeaderString && userName) {
        request = request.clone({
        setHeaders: {
        Authorization: basicAuthHeaderString
      }
    } );
  }
    return next.handle(request);
  }

}
