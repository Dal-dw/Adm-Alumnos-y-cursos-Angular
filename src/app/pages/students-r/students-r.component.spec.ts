import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRComponent } from './students-r.component';

xdescribe('StudentsRComponent', () => {
  let component: StudentsRComponent;
  let fixture: ComponentFixture<StudentsRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsRComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
