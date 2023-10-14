import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CoursesModel } from 'src/app/core/model/courses.model';
import { CoursesDetailModel } from 'src/app/core/model/coursesDetails.model';
import { CrudCoursesService } from 'src/app/services/crudcourses.service';;


@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
  providers: [MessageService]

})
export class CreateCourseComponent {
  

  newCourse: CoursesModel = {
    title: '',
    subtitle: '',
    description: '',
    duration: 0,
    start_date: "",
    capacity: 0,
    price: 0,
    due: 0,
    has_surcharge: 0,
    surcharge_percentage: 0,
    modality: '',
    schedules: '',
    banner: '',
    courseDetails: [
      {
        title: '',
        paragraph1: '',
        paragraph2: '',
        image1url: '',
        image2url: '',
      }
      // Puedes agregar más objetos de detalles del curso aquí si es necesario
    ],
  };

  constructor(
    private crudCourseService: CrudCoursesService,
    private route: Router,
    private messageService: MessageService,
  
    ){}


  createCourse() {
     // Formatea la fecha antes de enviarla a la base de datos
  this.newCourse.start_date = this.convertToDatabaseFormat(this.newCourse.start_date);

    this.crudCourseService.createCourses(this.newCourse).subscribe(() => {
      
      this.messageService.add({
        severity: 'success',
        summary: 'Creado correctamente',
        detail: `Curso ${this.newCourse.title} ${this.newCourse.subtitle} se creo con éxito`,
      });

      setTimeout(() => {

        this.route.navigate(['/crudCourses']);

      }, 3000)

    })

  }

  addDetail() {
    const newDetail: CoursesDetailModel = {
      id: 0,
      title: '',
      paragraph1: '',
      paragraph2: '',
      image1url: '',
      image2url: ''
      // Otras propiedades de CourseDetailsModel aquí
    };
    this.newCourse.courseDetails.push(newDetail);
  }

  private convertToDatabaseFormat(dateString: any): string {
    if (typeof dateString !== 'string') {
      dateString = dateString.toString();
    }
  
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    return dateString; // En caso de un formato incorrecto, simplemente retornamos el valor original
  }

}
