import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../core/model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private studentURL = 'http://localhost:4001/student'

  constructor(private http: HttpClient) { }

  createStudents(studentData: Student): Observable<Student[]> {

    return this.http.post<Student[]>(this.studentURL, studentData)

  }

  getStudents(): Observable<Student[]> {

    return this.http.get<Student[]>(this.studentURL)

  }

  getStudentById(id: number): Observable<Student> {

    const studentUrl = `${this.studentURL}/${id}`;
    return this.http.get<Student>(studentUrl);
    
  }

  updateStudents(id: number, student: Student): Observable<Student> {

    const updateURL = `${this.studentURL}/${id}`;

    return this.http.put<Student>(updateURL, student);
    
  }

  deleteStudent(id: number): Observable<Student[]> {

    const deleteURL = `${this.studentURL}/${id}`;

    return this.http.delete<Student[]>(deleteURL);

  }

}

export { Student };
