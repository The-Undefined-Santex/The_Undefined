import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTeacherComponent } from './teachers/edit-teacher.component';

const routes: Routes = [
  {
    path: '',
    component: EditTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherEditModule { }
