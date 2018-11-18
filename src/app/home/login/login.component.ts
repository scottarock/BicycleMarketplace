import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errors: string = null;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user.email = 'bob@roll.com';
    this.user.password = 'password';
  }

  onSubmit() {
    this.auth.login(this.user)
      .subscribe(
        () => { this.router.navigateByUrl('/dashboard') },
        errors => { this.errors = errors.error.message }
      )
  }

}
