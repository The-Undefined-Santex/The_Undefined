import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Teachers } from 'src/app/core/model/teachers.model';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss']
})
export class EditTeacherComponent {
  teacher: Teachers = new Teachers();

  constructor(private teachersService: TeachersService,
              private messageService: MessageService,
              private route: Router,
              private activatedRoute: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.cargar();
  }
 //traigo los datos por el id
  cargar(){
    this.activatedRoute.params.subscribe(
      dataForm => {
        let id = dataForm['id'];
        this.teachersService.getTeachersId(id).subscribe(teacher => {
          this.teacher = teacher;
        })
    })
  }
 //actualizo
  update(){
    this.teachersService.updateTeachers(this.teacher.id, this.teacher)
    .subscribe(res => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Estudiante Actualizado con exito'
      });
      setTimeout(() => {
        this.route.navigate(['/teachers']);
      }, 3000)
    })
  }
}
