import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentsComponent } from './update-students.component';

describe('UpdateStudentsComponent', () => {
  let component: UpdateStudentsComponent;
  let fixture: ComponentFixture<UpdateStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStudentsComponent]
    });
    fixture = TestBed.createComponent(UpdateStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
