import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AddFormCarComponent} from "./add-form-car.component";


describe('AddUpdateFormComponent', () => {
  let component: AddFormCarComponent;
  let fixture: ComponentFixture<AddFormCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFormCarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddFormCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
