import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingNewTaskComponent } from './adding-new-task.component';

describe('AddingNewTaskComponent', () => {
  let component: AddingNewTaskComponent;
  let fixture: ComponentFixture<AddingNewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingNewTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
