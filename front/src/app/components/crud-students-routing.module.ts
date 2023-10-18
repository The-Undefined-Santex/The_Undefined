import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudStudentsComponent } from './crud/crud-students/crud-students.component';

const routes: Routes = [
  {
    path: '',
    component: CrudStudentsComponent
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
export class CrudStudentsRouting { }
