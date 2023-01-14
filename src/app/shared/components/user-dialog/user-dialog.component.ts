import { Component, Inject } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../models/users.model';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent {
  nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  edadControl = new FormControl(0, [Validators.max(100)]);
  isActiveControl = new FormControl(false);
  userForm = new FormGroup({});
  constructor(
    private readonly MatDialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User | null
  ) {
    console.log(data);
    if (data) {
      this.userForm.patchValue(data);
    }
  }

  close() {
    this.MatDialogRef.close();
  }
}
