import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses'; // עדכני לפי ה-API שלך

  constructor(private http: HttpClient,private authService:AuthService) { }

  getCourses(): Observable<any> {
    const headers = this.authService.createAuthorizationHeader();
    return this.http.get(this.apiUrl, { headers });
  }

  enroll(courseId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/enroll`, { courseId, userId });
  }

  leave(courseId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/leave`, { courseId, userId });
  }
}
