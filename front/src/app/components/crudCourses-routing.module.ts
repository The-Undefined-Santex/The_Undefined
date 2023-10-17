import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudCourseComponent } from './crud-course/crud-course.component';

const routes: Routes = [

  {

    path: '',
    component: CrudCourseComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudCoursesRoutingModule { }
