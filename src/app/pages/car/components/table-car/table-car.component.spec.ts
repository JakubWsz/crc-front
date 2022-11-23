import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCarComponent } from './table-car.component';

describe('TableComponent', () => {
  let component: TableCarComponent;
  let fixture: ComponentFixture<TableCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
