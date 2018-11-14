import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('user submitted', this.user);
    this.auth.register(this.user)
      .subscribe(
        () => { this.router.navigateByUrl('/dashboard') },
        errors => { console.log(errors) }
      )
  }

}
