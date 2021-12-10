import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplyNotesComponent } from './disply-notes.component';

describe('DisplyNotesComponent', () => {
  let component: DisplyNotesComponent;
  let fixture: ComponentFixture<DisplyNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplyNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
