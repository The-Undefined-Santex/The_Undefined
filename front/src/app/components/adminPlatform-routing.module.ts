import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPlatformComponent } from './admin-platform/admin-platform.component';

const routes: Routes = [

  {

    path: '',
    component: AdminPlatformComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class adminPlatformRoutingModule { }