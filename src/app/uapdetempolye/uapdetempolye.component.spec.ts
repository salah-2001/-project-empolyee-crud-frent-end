import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UapdetempolyeComponent } from './uapdetempolye.component';

describe('UapdetempolyeComponent', () => {
  let component: UapdetempolyeComponent;
  let fixture: ComponentFixture<UapdetempolyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UapdetempolyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UapdetempolyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
