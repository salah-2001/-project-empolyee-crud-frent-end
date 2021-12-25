import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeListComponent } from './empolye-list.component';

describe('EmpolyeListComponent', () => {
  let component: EmpolyeListComponent;
  let fixture: ComponentFixture<EmpolyeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpolyeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpolyeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
