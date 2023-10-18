import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformStudentsComponent } from './platform-students.component';

describe('PlatformStudentsComponent', () => {
  let component: PlatformStudentsComponent;
  let fixture: ComponentFixture<PlatformStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformStudentsComponent]
    });
    fixture = TestBed.createComponent(PlatformStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
