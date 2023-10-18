import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/core/model/student.model';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss'],
  providers: [MessageService]

})
export class InscripcionComponent {
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

        this.route.navigate(['/pay-transf-course']);

      }, 3000)

    })

  }

}
