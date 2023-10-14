import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CoursesModel  } from '../core/model/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CrudCoursesService {
    private coursesURL = 'http://localhost:4001/courses'

  constructor(private http: HttpClient) { }

  createCourses(courseData: CoursesModel): Observable<CoursesModel[]> {

    return this.http.post<CoursesModel[]>(this.coursesURL, courseData)

  }

  getCourses(): Observable<CoursesModel[]> {

    return this.http.get<CoursesModel[]>(this.coursesURL)

  }

  getCoursesById(id: number): Observable<CoursesModel> {

    const courseUrl = `${this.coursesURL}/${id}`;
    return this.http.get<CoursesModel>(courseUrl);
    
  }

  updateCourses(id: number, course: CoursesModel): Observable<CoursesModel> {

    const updateURL = `${this.coursesURL}/${id}`;

    return this.http.put<CoursesModel>(updateURL, course);
    
  }

  deleteCourse(id: number): Observable<CoursesModel[]> {

    const deleteURL = `${this.coursesURL}/${id}`;

    return this.http.delete<CoursesModel[]>(deleteURL);

  }
}