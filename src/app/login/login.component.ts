import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'rwr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  validationMessage: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.authenticationService.authenticate(this.username, this.password)) {
      this.validationMessage = '';
      this.router.navigate(['work-record-list']);
    } else {
      this.validationMessage = 'Username or password not found';
    }
  }

}
