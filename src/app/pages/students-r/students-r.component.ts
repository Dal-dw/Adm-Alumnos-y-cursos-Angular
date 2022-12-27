import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudentApiResult } from 'src/app/models/sudentsApiModel';
import { StudentDataService } from '../../services/student-data.service';

@Component({
  selector: 'app-students-r',
  templateUrl: './students-r.component.html',
  styleUrls: ['./students-r.component.scss'],
})
export class StudentsRComponent implements OnInit {
  students$: Observable<StudentApiResult[]>;

  sus$: any;
  //OBSERVABLE

  constructor(studentDataService: StudentDataService) {
    this.students$ = studentDataService.getStudents();
  }

  displayedColumns = ['id', 'name', 'genero', 'thumbnail', 'edit', 'delete'];

  ngOnInit(): void {
    const myObs = of(1, 2, 3);
    this.sus$ = myObs.subscribe();
  }

  ngOnDestroy() {
    this.sus$.unsuscribe();
  }
}
//UNSUSCRIBE
