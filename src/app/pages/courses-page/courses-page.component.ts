import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from '../../models/courses.model';
import { CourseDialogComponent } from 'src/app/shared/components/course-dialog/course-dialog.component';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  createCourse,
  deleteCourse,
  editCourse,
  loadCourses,
} from './store/courses.actions';
import { selectCoursesState } from './store/courses.selectors';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  courses: Course[] = [];
  loading = true;

  loading$: Observable<boolean> = new Observable();

  ngOnInit(): void {
    this.store.select(selectCoursesState).subscribe((state) => {
      this.courses = state.data;
      this.loading = state.loading;
    });
  }
  //public courses: Observable<Course[]> = this.servicioCou.getCourses();

  displayedColumns = [
    'id',
    'name',
    'hours',
    'classes',
    'teacher',
    'thumbnail',
    'edit',
    'delete',
  ];

  constructor(
    private readonly dialogService: MatDialog,
    private servicioCou: CoursesDataService,
    private store: Store
  ) {
    this.store.dispatch(loadCourses());
  }

  createCourse() {
    const dialog = this.dialogService.open(CourseDialogComponent);

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.store.dispatch(createCourse({ data }));
      }
    });
  }
  deleteCourse(element: Course) {
    this.store.dispatch(deleteCourse({ data: element }));
  }

  editCourse(element: Course) {
    const dialog = this.dialogService.open(CourseDialogComponent, {
      data: element,
    });
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.store.dispatch(editCourse({ data }));
      }
    });
  }
  /*
  removeCourse(course: Course) {
    this.courses = this.courses.filter((cou) => cou.id !== course.id);
  }
  editCourse(course: Course) {
    const dialog = this.dialogService.open(CourseDialogComponent, {
      data: course,
    });
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        const tempArray = this.courses.map((cou) =>
          cou.id === course.id ? { ...cou, ...data } : cou
        );
        this.courses = tempArray;
      }
    });
  } */
}
