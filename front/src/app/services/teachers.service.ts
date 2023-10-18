import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teachers } from '../core/model/teachers.model';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private urlTeachers: string = 'http://localhost:4001/teachers';

  constructor(private http: HttpClient) { }
  
  
  getAllTeachers(): Observable<Teachers[]> {
    return this.http.get<Teachers[]>(this.urlTeachers);
  }

  createTeachers(teacher: Teachers): Observable<Teachers> {
    
    return this.http.post<Teachers>(this.urlTeachers, teacher);
  }

   
  getTeachersId(id: number | string ) : Observable<Teachers>{
    
    return this.http.get<Teachers>(`${this.urlTeachers}/${id}`);
  }

  updateTeachers(id: number | string, teacher: Teachers): Observable<Teachers> {
    return this.http.put<Teachers>(`${this.urlTeachers}/${id}`, teacher);
  }
 
  deleteTeachers(id: number | string): Observable<Teachers> {
    return this.http.delete<Teachers>(this.urlTeachers + '/ '+`${id}`);
  }
}
