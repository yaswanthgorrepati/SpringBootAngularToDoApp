import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService } from '../service/data/welcomedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMessage: string;
  errorMessage: string;
  constructor(private service: WelcomedataService
            , private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }
  getMessage() {
    // console.log('customized message');
    // console.log(this.service.executeHelloWorldBean());
    this.service.executeHelloWorldBean().subscribe(
      response => this.handleResponse(response),
      error => this.handleErrorResponse(error)
      );
  }
  getMessageWithParaeters() {
    this.service.executeHelloWorldBeanWithParameters(this.name).subscribe(
      response => this.handleResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleResponse(response) {
    // console.log(response);
    // console.log(response.message);
    this.welcomeMessage = response.message;
  }
  handleErrorResponse(error) {
    // console.log('Start of error');
    // console.log(error.status);
    // console.log(error.message);
     console.log(error);
     this.errorMessage = error.error.message;
  }
}
