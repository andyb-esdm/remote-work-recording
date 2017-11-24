import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'rwr-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  get isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated();
  }

  get username(): string {
    return this.authenticationService.getUsername();
  }

  ngOnInit() {
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigate(['home']);
  }

}
