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

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('user submitted', this.user);
    this.auth.login(this.user)
      .subscribe(
        () => { this.router.navigateByUrl('/dashboard') },
        errors => { console.log(errors) }
      )
  }

}