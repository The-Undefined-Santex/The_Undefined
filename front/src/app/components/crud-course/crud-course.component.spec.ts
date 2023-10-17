import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCourseComponent } from './crud-course.component';

describe('CrudCourseComponent', () => {
  let component: CrudCourseComponent;
  let fixture: ComponentFixture<CrudCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudCourseComponent]
    });
    fixture = TestBed.createComponent(CrudCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
