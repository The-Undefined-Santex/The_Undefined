import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../core/model/authModel';
import { Admin } from '../core/interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authEndpoint = 'http://localhost:4001/auth';

  private adminEndpoint = 'http://localhost:4001/admin';

  constructor(private http: HttpClient) { }

  // Método para enviar la solicitud POST con los parámetros y obtener la respuesta.
  login(user: string, pass: string): Observable<AuthResponse> {
    const requestBody = { user, pass };
    return this.http.post<AuthResponse>(this.authEndpoint, requestBody);
  }

  getPosts():Observable<Admin[]> { //creamos un metodo que va a devolver un observable con el array de cursos

    return this.http.get<Admin[]>(this.adminEndpoint) //hacemos un get del endpoint que será el array de cursos

  }
}