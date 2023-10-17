import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses/courses-detail/courses-detail.component';
import { PrimengModule } from 'src/app/lib/primeNG/primeng/primeng.module';
import { LandingCoursesComponent } from './courses/landing-courses/landing-courses.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CompaniesComponent } from './companies/companies.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EventsComponent } from './events/events.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RecordComponent } from './record/record.component';
import { PayTransfCourseComponent } from './courses/pay-transf-course/pay-transf-course.component';
import { PrimeflexModule } from '../lib/primeFlex/primeflex/primeflex.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { AllCoursesComponent } from './courses/all-courses/all-courses.component';

import { CardModule } from 'primeng/card'; 
import { ButtonModule } from 'primeng/button'; 
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';

import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

import { AllCoursesRoutingModule } from './all-courses-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInscrCoursesComponent } from './courses/form-inscr-courses/form-inscr-courses.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ResultPipe } from './pipes/result.pipe';

import { TeachersComponent } from './teachers/teachers.component';
import { EditTeacherComponent } from './teachers/edit-teacher.component';
import { NewTeachersComponent } from './teachers/new-teachers.component';

import { CrudCourseComponent } from './crud-course/crud-course.component';
import { UpdateCoursesComponent } from './update-courses/update-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import {  CustomDatePipe } from './pipes/custom-date.pipe';




@NgModule({
  declarations: [ CoursesComponent, 
                  CoursesDetailComponent, 
                  LandingCoursesComponent, 
                  HeaderComponent, 
                  HomeComponent, 
                  FooterComponent, 
                  BannerComponent, 
                  CompaniesComponent, 
                  TestimonialsComponent, 
                  EventsComponent, 
                  AdvertisementsComponent, 
                  ContactComponent, 
                  LoginComponent, 
                  RecordComponent, 
                  PayTransfCourseComponent, 
                  AllCoursesComponent, 
                  FormInscrCoursesComponent, 

                  FilterPipe, ResultPipe, TeachersComponent, EditTeacherComponent, NewTeachersComponent, 

                  CrudCourseComponent, UpdateCoursesComponent, CreateCourseComponent,  CustomDatePipe, 

                ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    PrimengModule,
    PrimeflexModule,
    CardModule,
    ButtonModule,
    SplitButtonModule,
    MenuModule,
    PanelModule,
    ToolbarModule,
    AllCoursesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    ToastModule,
    CalendarModule,
    InputNumberModule,
    TableModule

    
  ],
  exports: [
    CoursesComponent,
    LandingCoursesComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    ConfirmDialogModule,
    ConfirmDialog,
    ToastModule
  ],
})
export class ComponentsModule {}
