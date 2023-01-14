import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from '../../models/courses.model';
import { CourseDialogComponent } from 'src/app/shared/components/course-dialog/course-dialog.component';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  ngOnInit(): void {}

  public courses: Observable<Course[]> = this.servicioCou.getCourses();

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
    private servicioCou: CoursesDataService
  ) {}

  /* addCourse() {
    const dialog = this.dialogService.open(CourseDialogComponent);

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.courses[this.courses.length - 1]?.id;
        this.courses = [
          ...this.courses,
          new Course(
            lastId + 1,
            value.name,
            value.hours,
            value.classes,
            value.teacher,
            value.thumbnail
          ),
        ];
      }
    });
  }
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
