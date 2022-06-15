import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedbooksComponent } from './completedbooks.component';

describe('CompletedbooksComponent', () => {
  let component: CompletedbooksComponent;
  let fixture: ComponentFixture<CompletedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
