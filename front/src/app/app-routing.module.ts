import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {

    path: 'all-courses',
    loadChildren: () => import('../app/components/all-courses-routing.module').then(m => m.AllCoursesRoutingModule)

  },
  {
    path: 'courses/:id',
    loadChildren: () => import('../app/components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: 'form-inscr-courses/:id',
    loadChildren: () => import('../app/components/form-inscr-courses-routing.module').then(m => m.FormInscrCoursesRoutingModule)
  },
  {
    path: 'pay-transf-course',
    loadChildren: () => import('./components/pay-transf-course-routing.module').then(m => m.PayTransfCourseModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./components/courses-mockSuccess-routing.module').then(m => m.CoursesMockSuccessModule)
  },
  {
    path: 'unsuccessfully',
    loadChildren: () => import('./components/courses-mockUnseccesfully-routing.module').then(m => m.CoursesMockUnseccesfullyModule)
  },
  {

    path: 'teachers',
    loadChildren: () => import('./components/teachers-routing.module').then(m => m.TeachersModule)
  },
    {
      path: 'new-teacher',
      loadChildren: () => import('./components/teacher-new-routing.module').then(m => m.TeacherNewModule)
    },
    {
      path: 'edit-teacher/:id',
      loadChildren: () => import('./components/teacher-edit-routing.module').then(m => m.TeacherEditModule)
    },
  {
    path: 'profil/:id',
    component: Error404Component,
},
 {
    path: 'crudCourses',
    loadChildren: () => import('./components/crudCourses-routing.module').then(m => m.CrudCoursesRoutingModule)
  },
  {
    path: 'course/:id',
    loadChildren: () => import('./components/updateCourses-routing.module').then(m => m.UpdateCourseRoutingModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./components/createCourses-routing.module').then(m => m.CreateCourseRoutingModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./components/login-routing.module').then(m => m.LoginRoutingModule)
  },
  {
    path: 'crud-students',
    loadChildren: () => import('../app/components/crud-students-routing.module').then(m => m.CrudStudentsRouting)
  },
  {
    path: 'create-student',
    loadChildren: () => import('../app/components/create-student-routing.module').then(m => m.CreateStudentRouting)
  },
  {
    path: 'edit-students/:id',
    loadChildren: () => import('../app/components/edit-student-routing.module').then(m => m.EditStudentRouting)
  },
  {
    path: 'platform-students/:id',
    loadChildren: () => import('../app/components/platform-students-routing.module').then(m => m.PlatformStudentsRouting)
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

