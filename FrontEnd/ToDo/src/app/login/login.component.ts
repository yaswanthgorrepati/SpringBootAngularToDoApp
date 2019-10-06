import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Enter valid Credentials';
  invalid = false;
  constructor(
    private router: Router,
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }
  loginClicked() {
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalid = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalid = true;
    }
  }

  loginBasicAuthClicked() {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        // console.log(data);
        this.invalid = false;
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        // console.log(error);
        this.invalid = true;
      } );
  }

  loginJWTAuthClicked() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          // console.log(data);
          this.invalid = false;
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          // console.log(error);
          this.invalid = true;
        });
  }
}
