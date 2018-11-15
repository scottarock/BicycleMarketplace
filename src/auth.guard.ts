import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './app/services';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    status: RouterStateSnapshot
  ): boolean {
    const isAuthed: boolean = this.auth.isAuthed();

    if ( !isAuthed ) {
      this.router.navigate(['/']);
    }

    return isAuthed;
  }
}
