import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/core/model/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
  providers: [MessageService]
})
export class CreateStudentComponent {

  newStudent: Student = new Student()

  constructor(
    private studentService: StudentsService, 
    private route: Router,
    private messageService: MessageService
    ){}


  createStudent() {

    this.studentService.createStudents(this.newStudent).subscribe(() => {

      this.messageService.add({
        severity: 'success',
        summary: 'Creado correctamente',
        detail: `Estudiante ${this.newStudent.first_name} ${this.newStudent.last_name} se creo con éxito.`,
      });

      setTimeout(() => {

        this.route.navigate(['/crud-students']);

      }, 3000)

    })

  }

}
