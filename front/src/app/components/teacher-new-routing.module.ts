import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTeachersComponent } from './teachers/new-teachers.component';



const routes: Routes = [
  {
    path: '',
    component: NewTeachersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherNewModule { }
