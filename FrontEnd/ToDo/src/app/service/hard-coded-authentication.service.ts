import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    // console.log('Before: ' + this.isUserLogged());
    if (username === 'nakedbottoms' && password === 'dummy') {
      sessionStorage.setItem('loggedUser', username);
      // console.log('After: ' + this.isUserLogged());
      return true;
    }
    return false;
  }
  isUserLogged() {
   const user = sessionStorage.getItem('loggedUser');
   return !(user === null) ;
  }

  logout() {
    sessionStorage.removeItem('loggedUser');
  }
}
