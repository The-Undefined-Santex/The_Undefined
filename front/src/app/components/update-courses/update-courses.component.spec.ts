import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoursesComponent } from './update-courses.component';

describe('UpdateCoursesComponent', () => {
  let component: UpdateCoursesComponent;
  let fixture: ComponentFixture<UpdateCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCoursesComponent]
    });
    fixture = TestBed.createComponent(UpdateCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
