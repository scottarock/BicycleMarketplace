import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';

import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly base: string = '/api/auth';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/login`, user);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/register`, user);
  }

  logout(): Observable<boolean> {
    return this.http.delete<boolean>(`${this.base}/logout`);
  }

  isAuthed(): boolean {
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const userId = this.cookieService.get('userId');
    const session = this.cookieService.get('session');

    return expired && userId && session && Date.now() < expired;
  }

}
