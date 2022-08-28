import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvididualTaskComponent } from './invididual-task.component';

describe('InvididualTaskComponent', () => {
  let component: InvididualTaskComponent;
  let fixture: ComponentFixture<InvididualTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvididualTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvididualTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
