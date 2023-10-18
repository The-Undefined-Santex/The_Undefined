import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/services/students.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-platform-students',
  templateUrl: './platform-students.component.html',
  styleUrls: ['./platform-students.component.scss']
})
export class PlatformStudentsComponent implements OnInit {

  student: Student = new Student();

  constructor(  
    private studentService: StudentsService, 
    private activatedRoute: ActivatedRoute,){}

  ngOnInit() {

    this.loadStudents()

  }

  loadStudents() {

    this.activatedRoute.params.subscribe(

      dataForm => {

        let id = dataForm['id'];

        this.studentService.getStudentById(id).subscribe(student => {

          this.student = student;

          console.log(student.Cohorts)

        })
    })

  }


}
