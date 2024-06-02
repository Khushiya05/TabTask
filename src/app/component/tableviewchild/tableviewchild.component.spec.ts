import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewchildComponent } from './tableviewchild.component';

describe('TableviewchildComponent', () => {
  let component: TableviewchildComponent;
  let fixture: ComponentFixture<TableviewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableviewchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
