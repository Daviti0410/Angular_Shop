import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:4000/auth/login';

  login(username: string, password: string): Observable<any> {
    const userCredentials = { userName: username, password };

    return this.http.post<any>(this.apiUrl, userCredentials, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
  }
}
