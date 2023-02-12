import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, mergeMap, tap, of, catchError } from 'rxjs';
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
          this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
        ),
        map(
          ({ data }) =>
            new User(
              data.id,
              data.email,
              data.first_name,
              data.last_name,
              data.avatar
            )
        ),
        tap((user) => this.sessionService.setUser(user)),
        tap((data) => localStorage.setItem('user', data.email))
      );
  }

  verifyToken(): Observable<boolean> {
    const lsToken = localStorage.getItem('token');

    return of(lsToken).pipe(
      tap((token) => {
        if (!token) throw new Error('Token invalido');
      }),
      mergeMap((token) =>
        this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
      ),
      map((user) => !!user),
      catchError(() => of(false))
    );
  }
}
