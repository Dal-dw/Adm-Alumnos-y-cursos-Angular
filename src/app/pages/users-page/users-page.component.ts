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
      name: 'Juan',
      lastName: 'Pérez',
      edad: 30,

      thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704y',
    },
    {
      id: 2,
      name: 'Ana',
      lastName: 'González',
      edad: 25,

      thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704t',
    },
    {
      id: 3,
      name: 'Pedro',
      lastName: 'Martínez',
      edad: 35,

      thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704u',
    },
    {
      id: 4,
      name: 'Sandra',
      lastName: 'Rodríguez',
      edad: 28,

      thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704n',
    },
    {
      id: 5,
      name: 'Laura',
      lastName: 'Sánchez',
      edad: 32,

      thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704d',
    },
    {
      id: 6,
      name: 'Pablo',
      lastName: 'García',
      edad: 40,

      thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704g',
    },
    {
      id: 7,
      name: 'Mario',
      lastName: 'López',
      edad: 45,

      thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704h',
    },
    {
      id: 8,
      name: 'Raquel',
      lastName: 'Díaz',
      edad: 37,

      thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704i',
    },
    {
      id: 9,
      name: 'Ramona',
      lastName: 'Fernández',
      edad: 29,

      thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704k',
    },
    {
      id: 10,
      name: 'Andrés',
      lastName: 'Muñoz',
      edad: 33,

      thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704m',
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

  addUser() {
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
  }
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
