import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudStudentsComponent } from './crud/crud-students/crud-students.component';
import { PlatformStudentsComponent } from './platform-students/platform-students.component';

const routes: Routes = [
  {
    path: '',
    component: PlatformStudentsComponent
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
export class PlatformStudentsRouting { }
