import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Teachers } from 'src/app/core/model/teachers.model';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  titulo: string = 'Listado de Profesores'

  teachers!: Teachers[];
  
 

  constructor(private teachersService: TeachersService, 
              private messageService: MessageService,
              private ConfirmationService: ConfirmationService,
               ) { }

  ngOnInit(): void {
    this.getAllTeachers();
  }
//me podrias ayudar, necesito traer la informacion de profesores e informacion de contacto
 
 

  getAllTeachers(){
        this.teachersService.getAllTeachers()
        .subscribe(
          (res) => {//data son los estudiantes
            this.teachers = res
          },(error) => {console.error(error)})
  }
  

  deleteTeacher(id: number){
    //console.log('Este es el id', id)
    this.ConfirmationService.confirm(
      {
        message: 'Esta seguro que desea eliminar este estudiante?',
        header: 'Atencion',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.teachersService.deleteTeachers(id).subscribe(
            (res) => {
              this.messageService.add(
                {
                severity:'success', 
                summary:'Eliminado', 
                detail:'Estudiante eliminado'
                });

                setTimeout(() => {
                  this.getAllTeachers();
                }, 2000)
              
            }, (error) => {console.error(error)})
        }
      })
    }
}
