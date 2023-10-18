import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CoursesModel } from 'src/app/core/model/courses.model';
import { CrudCoursesService } from 'src/app/services/crudcourses.service';
import { DatePipe } from '@angular/common';
import { CustomDatePipe } from '../pipes/custom-date.pipe';

@Component({
  selector: 'app-update-courses',
  templateUrl: './update-courses.component.html',
  styleUrls: ['./update-courses.component.scss'],
  providers: [MessageService, DatePipe, CustomDatePipe]

})


export class UpdateCoursesComponent implements OnInit {
  course: CoursesModel [] = [];

  changesMade: boolean = false;

  constructor(  
    private crudCourseService: CrudCoursesService, 
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private datePipe: DatePipe,
    private customDatePipe: CustomDatePipe ){}
    
    ngOnInit(): void {

      this.loadChanges();

    }

    onDateSelect(): void {

      this.changesMade = true;

    }

    loadChanges() {
      this.activatedRoute.params.subscribe((dataForm) => {
        let id = dataForm['id'];
        this.crudCourseService.getCoursesById(id).subscribe((course) => {
          this.course = [course];
          course.start_date = this.customDatePipe.transform(course.start_date);
        });
        
      });

  }

    uploadChanges(): void {
      if (!this.changesMade) {
        alert('No hay cambios para actualizar');
        return;
      }
    
      if (!this.course || this.course.length === 0) {
        alert('No se ha seleccionado un curso para actualizar');
        return;
      }
      const courseToUpdate = this.course[0]; // Supongamos que quieres actualizar el primer curso en el array
    
      if (!courseToUpdate.id) {
        alert('El curso seleccionado no tiene un ID válido para actualizar');
        return;
      }
      courseToUpdate.start_date = this.convertToDatabaseFormat(courseToUpdate.start_date);
      this.crudCourseService.updateCourses(courseToUpdate.id, courseToUpdate).subscribe(res => {
        console.log('Esta es la respuesta', res);
    
        this.messageService.add({
          severity: 'success',
          summary: 'Actualizado correctamente',
          detail: `Curso ${courseToUpdate.title}  Subtitulo  ${courseToUpdate.subtitle} actualizado con éxito`,
        });
    
        setTimeout(() => {
          this.route.navigate(['/crudCourses']);
        }, 3000);
      });
    }

    private convertToDatabaseFormat(dateString: string): string {
      const parts = dateString.split('-');
      if (parts.length === 3) {
        const day = parts[0];
        const month = parts[1];
        const year = parts[2];
        return `${year}-${month}-${day}`;
      }
      return dateString; 
    }
  
  }



