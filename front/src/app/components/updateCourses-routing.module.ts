import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCoursesComponent  } from './update-courses/update-courses.component';

const routes: Routes = [

  {

    path: '',
    component: UpdateCoursesComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCourseRoutingModule { }