import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../core/model/authModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authEndpoint = 'http://localhost:4001/auth';

  constructor(private http: HttpClient) { }

  // Método para enviar la solicitud POST con los parámetros y obtener la respuesta.
  login(user: string, pass: string): Observable<AuthResponse> {
    const requestBody = { user, pass };
    return this.http.post<AuthResponse>(this.authEndpoint, requestBody);
  }
}