import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CoursesModel } from 'src/app/core/model/courses.model';
import { CrudCoursesService } from 'src/app/services/crudcourses.service';
import { DatePipe } from '@angular/common';
// import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-crud-course',
  templateUrl: './crud-course.component.html',
  styleUrls: ['./crud-course.component.scss'],
  providers: [ConfirmationService, DatePipe]

})
export class CrudCourseComponent implements OnInit {

  courses: CoursesModel[] = [];


  formattedStartDate: (string | null)[] = [];

  display: boolean[] = [];

  showDialog(i: number): void {
    this.display[i] = !this.display[i]; // Cambia el estado de visibilidad para el curso en la posición 'i'
    console.log(i);
  }



  constructor(private confirmationService: ConfirmationService, private crudCourseService: CrudCoursesService,
    private datePipe: DatePipe){}

  ngOnInit(): void {
    
    this.loadCourses();

    // Inicializar el arreglo display
   


  }



  
//   selectProduct(course: CoursesModel) {
//     this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: course.title });
// }

  loadCourses(): void {
    
    this.crudCourseService.getCourses().subscribe((data) => {

      this.courses = data;

      this.formattedStartDate = this.courses.map((course) =>
        course.start_date ? this.datePipe.transform(course.start_date, 'dd/MM/yyyy') : null
      );
      // this.visible = new Array(this.courses.length).fill(false); // Inicializa el arreglo con valores falsos
      console.log(data);

    })
  }

formatStartDate(startDate: Date): string {
  const date = new Date(startDate);
  date.setDate(date.getDate() + 1); // Agregar 1 día
  const day = date.getDate();
  const month = date.getMonth() + 1; // Los meses en JavaScript se cuentan desde 0
  const year = date.getFullYear();
  return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
}


  deleteCourses(id: number): void {

    const COURSEDELETE = this.courses.find((course) => course.id === id)

    if(COURSEDELETE) {

      this.confirmationService.confirm({

        message: `¿Deseas eliminar el curso: ${COURSEDELETE.title} ${COURSEDELETE.subtitle} ?`,

        accept: () => {

          this.crudCourseService.deleteCourse(id).subscribe(() => {

            this.courses = this.courses.filter((course) => course.id !== id)
    
          })

        }

      })

    }

  }

}
