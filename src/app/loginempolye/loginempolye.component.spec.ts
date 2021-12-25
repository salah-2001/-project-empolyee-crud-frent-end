import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginempolyeComponent } from './loginempolye.component';

describe('LoginempolyeComponent', () => {
  let component: LoginempolyeComponent;
  let fixture: ComponentFixture<LoginempolyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginempolyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginempolyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
