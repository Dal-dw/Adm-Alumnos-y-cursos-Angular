import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, take } from 'rxjs';
import { User } from 'src/app/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private user = new BehaviorSubject<User | null>(null);
  public user$ = this.user.asObservable();

  constructor() {}

  setUser(user: User): void {
    this.user.next(user);
  }

  updateSessionUser(data: Partial<User>) {
    this.user$.pipe(take(1)).subscribe((user) => {
      if (user) {
        this.setUser(
          new User(
            data.id || user.id,
            data.email || user.email,
            data.password || user.password,
            data.tipo || user.tipo
          )
        );
      }
    });
  }
}
