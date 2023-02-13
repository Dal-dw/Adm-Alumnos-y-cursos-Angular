import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from 'src/app/shared/components/user-dialog/user-dialog.component';
import { User } from '../../models/users.model';
//import { UserDialogComponent } from '../../shared/components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users: User[] = [
    { id: 1, email: 'user1@example.com', password: '123456', tipo: 'admin' },
    { id: 2, email: 'user2@example.com', password: '123456', tipo: 'user' },
    { id: 3, email: 'user3@example.com', password: '123456', tipo: 'admin' },
    { id: 4, email: 'user4@example.com', password: '123456', tipo: 'user' },
  ];

  displayedColumns = ['id'];

  constructor(private readonly dialogService: MatDialog) {}

  /* addUser() {
    const dialog = this.dialogService.open(UserDialogComponent);

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.users[this.users.length - 1]?.id;
        this.users = [
          ...this.users,
          new User(
            lastId + 1,
            value.name,
            value.lastName,
            value.edad,
            'https://i.pravatar.cc/100'
          ),
        ];
      }
    });
  } */
  removeUser(user: User) {
    this.users = this.users.filter((usr) => usr.id !== user.id);
  }
  editUser(user: User) {
    const dialog = this.dialogService.open(UserDialogComponent, {
      data: user,
    });
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        const tempArray = this.users.map((usr) =>
          usr.id === user.id ? { ...usr, ...data } : usr
        );
        this.users = tempArray;
      }
    });
  }

  ngOnInit(): void {}
}
