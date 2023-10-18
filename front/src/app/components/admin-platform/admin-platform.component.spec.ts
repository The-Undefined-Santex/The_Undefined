import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlatformComponent } from './admin-platform.component';

describe('AdminPlatformComponent', () => {
  let component: AdminPlatformComponent;
  let fixture: ComponentFixture<AdminPlatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPlatformComponent]
    });
    fixture = TestBed.createComponent(AdminPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
