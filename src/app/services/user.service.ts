import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';

import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base: string = '/api/user';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getUser(): Observable<User> {
    const userId: string = this.cookieService.get('userId');
    return this.http.get<User>(`${this.base}/${userId}`);
  }
}
