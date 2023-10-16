import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Student } from 'src/app/core/model/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-crud-students',
  templateUrl: './crud-students.component.html',
  styleUrls: ['./crud-students.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class CrudStudentsComponent implements OnInit {

  visible: boolean = false;

  students: Student[] = [];


  constructor(private studentService: StudentsService, private confirmationService: ConfirmationService, private messageService: MessageService){}

  ngOnInit(): void {
    
    this.loadStudents();

  }

  loadStudents(): void {

    this.studentService.getStudents().subscribe((data) => {

      this.students = data;

    })
  }


  deleteStudent(id: number): void {

    const STUDENTDELETE = this.students.find((student) => student.id === id)

    if(STUDENTDELETE) {

      this.confirmationService.confirm({

        message: `¿Deseas eliminar al estudiante: ${STUDENTDELETE.first_name} ${STUDENTDELETE.last_name} ?`,

        accept: () => {

          this.studentService.deleteStudent(id).subscribe(() => {

            this.students = this.students.filter((student) => student.id !== id)

            this.messageService.add({
              
              severity: 'success',
              summary: 'Eliminado correctamente',
              detail: `El estudiante ${STUDENTDELETE.first_name} ${STUDENTDELETE.last_name} se eliminó correctamente.`,
              
            });
    
          })

        }

      })

    }

  }

}
