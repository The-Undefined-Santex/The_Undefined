import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStudentsComponent } from './crud/update-students/update-students.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateStudentsComponent
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
export class EditStudentRouting { }
