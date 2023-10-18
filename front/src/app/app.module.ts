import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule }from '@angular/platform-browser/animations'
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { MockUnsuccessfullyComponent } from './components/courses/courses-mock/mock-unsuccessfully.component';
import { MockSuccessComponent } from './components/courses/courses-mock/mock-success.component';
import { Error404Component } from './components/error404/error404.component';

import { Student} from './services/students.service';
import { AdminModel } from './core/model/adminModel';


@NgModule({
  declarations: [
    AppComponent,
    MockUnsuccessfullyComponent,
    MockSuccessComponent,    
    Error404Component,
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],                             

  providers: [Student, AdminModel],
  bootstrap: [AppComponent],
})
export class AppModule { }
