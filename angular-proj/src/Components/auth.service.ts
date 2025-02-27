// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private baseUrl = 'http://localhost:3000/api/auth';

//   constructor(private http: HttpClient) {}


//   login(data: {  email: string; password:string}): Observable<any> {
//     return this.http.post(`${this.baseUrl}/login`, data);
//   }
//   register(data: { name: string; email: string; password: string,role:string }): Observable<any> {
    
//     return  this.http.post(`${this.baseUrl}/register`, data);
   
//   }

//   // פונקציה לשמירת טוקן
//   saveToken(token: string) {
//     sessionStorage.setItem('token', token);
//   }

//   // פונקציה לשליפת טוקן
//   getToken(): string | null {
//     return sessionStorage.getItem('token');
//   }

//   // פונקציה לבדיקת האם המשתמש מחובר
//   isLoggedIn(): boolean {
//     return !!this.getToken();
//   }

//   logout() {
//     sessionStorage.removeItem('token');
//   }

// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}


  login(data: {  email: string; password:string}): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  register(data: { name: string; email: string; password: string,role:string }): Observable<any> {
    
    return  this.http.post(`${this.baseUrl}/register`, data);
   
  }

  // פונקציה לשמירת טוקן
  saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  // פונקציה לשליפת טוקן
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  // פונקציה לבדיקת האם המשתמש מחובר
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    sessionStorage.removeItem('token');
  }}
