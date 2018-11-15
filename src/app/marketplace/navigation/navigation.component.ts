import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout()
      .subscribe( success => {
        if ( success ) {
          this.router.navigateByUrl('/');
        }
      });
  }

}
