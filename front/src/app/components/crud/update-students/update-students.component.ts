import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/core/model/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-update-students',
  templateUrl: './update-students.component.html',
  styleUrls: ['./update-students.component.scss'],
  providers: [MessageService]
})
export class UpdateStudentsComponent {

  student: Student = new Student();

  changesMade: boolean = false;

  constructor(
    private studentService: StudentsService, 
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
    ){}


    ngOnInit(): void {

      this.loadChanges();

    }

    onDateSelect(): void {

      this.changesMade = true;

    }

    //Traigo los datos del estudiante mediante el

    loadChanges() {

      this.activatedRoute.params.subscribe(

        dataForm => {

          let id = dataForm['id'];

          this.studentService.getStudentById(id).subscribe(student => {

            this.student = student;

            console.log(this.student.birth_date)

          })
      })

    }

    //Actualizar los cambios del estudiante

    uploadChanges():void {

      if(!this.changesMade){

        alert("No hay cambios para actualizar")
        return;

      }

      this.studentService
        .updateStudents(this.student.id, this.student)

        .subscribe((res) => {

          console.log('Esta es la respuesta', res);

          this.messageService.add({
            severity: 'success',
            summary: 'Actualizado correctamente',
            detail: `Estudiante ${this.student.first_name} ${this.student.last_name} actualizado con éxito.`,
          });

          setTimeout(() => {

            this.route.navigate(['/crud-students']);

          }, 3000)

        }, (error) => {

          this.messageService.add({
            severity: 'error',
            summary: 'Error al actualizar',
            detail: `Hubo un error al actualizar el estudiante ${this.student.first_name} ${this.student.last_name}, vuelve a intentar nuevamente.`,
          });
        });

    }

}
