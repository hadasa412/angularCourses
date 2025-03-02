import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../app/Services/course.service';
import { AuthService } from '../../app/Services/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  userId!: number; // נאסוף את ה-ID מהמשתמש המחובר

  constructor(private courseService: CourseService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId(); // צריך להיות פונקציה שמחזירה את ה-ID
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: (courses: any) => {
        this.courses = courses;
      },
      error: (err: any) => {
        console.error('Error fetching courses', err);
      }
    });
  }

  enroll(courseId: number) {
    this.courseService.enroll(courseId, this.userId).subscribe({
      next: () => {
        this.loadCourses(); // רענון הרשימה
      },
      error: (err) => {
        console.error('Error enrolling in course:', err);
      }
    });
  }

  leave(courseId: number) {
    this.courseService.leave(courseId, this.userId).subscribe({
      next: () => {
        this.loadCourses(); // רענון הרשימה
      },
      error: (err) => {
        console.error('Error leaving course:', err);
      }
    });
  }
}
