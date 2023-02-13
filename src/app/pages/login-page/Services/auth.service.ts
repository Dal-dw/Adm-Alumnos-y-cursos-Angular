import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, mergeMap, tap } from 'rxjs';
import { SessionService } from 'src/app/shared/services/Session.service';
import {
  LoginSuccessful,
  SingleUserResponse,
} from 'src/app/models/reqres.interfaces';
import { User } from 'src/app/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://reqres.in/api';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly sessionService: SessionService
  ) {}

  login(data: { email: string; password: string }): Observable<User> {
    return this.httpClient
      .post<LoginSuccessful>(`${this.apiUrl}/login`, data)
      .pipe(
        tap((data) => localStorage.setItem('token', data.token)),
        mergeMap(() =>
          this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/9`)
        ),
        map(
          ({ data }) =>
            new User(data.id, data.email, data.first_name, data.last_name)
        ),
        tap((user) => this.sessionService.setUser(user)),
        tap((user) => localStorage.setItem('user', user.email))
      );
  }
}
