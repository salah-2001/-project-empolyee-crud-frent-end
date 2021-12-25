import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpolyeComponent } from './add-empolye.component';

describe('AddEmpolyeComponent', () => {
  let component: AddEmpolyeComponent;
  let fixture: ComponentFixture<AddEmpolyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmpolyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpolyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
