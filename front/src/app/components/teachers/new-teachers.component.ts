import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Teachers } from 'src/app/core/model/teachers.model';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-new-teachers',
  templateUrl: './new-teachers.component.html',
  styleUrls: ['./new-teachers.component.scss']
})
export class NewTeachersComponent implements OnInit{

 //declaro un objeto de tipo estudiante instanciando, que va a ser mapeado por ngModel
 teacher: Teachers = new Teachers();

 constructor(private teachersService: TeachersService,
             private messageService: MessageService,
             private router: Router) { }

 ngOnInit(): void {

 }


 //metodo para crear un estudiante
 create() {
   // Lógica para crear un estudiante
   this.teachersService.createTeachers(this.teacher).subscribe(
     (res) => {
       
      console.log(res);
      this.teacher = res
       
       this.messageService.add({
         severity: 'success',
         summary: 'Success',
         detail: 'Estudiante Creado con exito'
       });
      
       // Configura un retraso de 3 segundos antes de redirigir
       setTimeout(() => {
         this.router.navigate(['/teachers']);
       }, 3000); // 3000 milisegundos = 3 segundos
     },
     (error) => {
       console.error(error);
     }
   );
 }
}
