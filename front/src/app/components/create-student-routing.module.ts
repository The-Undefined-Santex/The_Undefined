import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStudentsComponent } from './crud/update-students/update-students.component';
import { CreateStudentComponent } from './crud/create-student/create-student.component';

const routes: Routes = [
  {
    path: '',
    component: CreateStudentComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CreateStudentRouting { }
