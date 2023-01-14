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
    {
      id: 1,
      email: 'juan@gmail.com',
      first_name: 'Juan',
      last_name: 'Pérez',

      avatar: 'https://i.pravatar.cc/100?u=a042581f4e29026704y',
    },
    {
      id: 2,
      email: 'nombre@email.com',
      first_name: 'Ana',
      last_name: 'González',

      avatar: 'https://i.pravatar.cc/100?u=a042581f4e29026704t',
    },
    {
      id: 3,
      email: 'nombre@email.com',
      first_name: 'Pedro',
      last_name: 'Martínez',

      avatar: 'https://i.pravatar.cc/100?u=a042581f4e29026704u',
    },
    {
      id: 4,
      email: 'nombre@email.com',
      first_name: 'Sandra',
      last_name: 'Rodríguez',

      avatar: 'https://i.pravatar.cc/100?u=a042581f4e29026704n',
    },
    {
      id: 5,
      email: 'nombre@email.com',
      first_name: 'Laura',
      last_name: 'Sánchez',

      avatar: 'https://i.pravatar.cc/100?u=a042581f4e29026704d',
    },
  ];

  displayedColumns = [
    'id',
    'name',
    'lastName',
    'edad',
    'thumbnail',
    'edit',
    'delete',
  ];

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
