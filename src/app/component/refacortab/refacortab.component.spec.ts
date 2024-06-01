import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefacortabComponent } from './refacortab.component';

describe('RefacortabComponent', () => {
  let component: RefacortabComponent;
  let fixture: ComponentFixture<RefacortabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefacortabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefacortabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
