import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CarFacade} from "../../../../store/car/car.facade";

@Component({
  selector: 'app-add-update-form',
  templateUrl: './add-form-car.component.html',
  styleUrls: ['./add-form-car.component.css']
})
export class AddFormCarComponent {
  form: FormGroup = this.fb.group({
    brand: ['', Validators.required],
    model: ['', Validators.required],
    carType: ['', Validators.required],
    fuelType: ['', Validators.required],
    gearboxType: ['', Validators.required],
    doorNumber: ['', Validators.required],
    bootCapacity: ['', Validators.required],
    officeId: ['', Validators.required],
  });

  carAddSuccess$ = this.carFacade.carAddSuccess$;
  carAddLoading$ = this.carFacade.carAddLoading$;
  carDeleteSuccess$ = this.carFacade.carDeleteSuccess$;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) private data: any, private carFacade: CarFacade,
              private dialogRef: MatDialogRef<AddFormCarComponent>) {
  }

  createCar(): void {
    this.carFacade.addCar({
      bootCapacity: this.form.get("bootCapacity")?.value,
      brand: this.form.get("brand")?.value,
      carType: this.form.get("carType")?.value,
      doorNumber: this.form.get("doorNumber")?.value,
      fuelType: this.form.get("fuelType")?.value,
      gearboxType: this.form.get("gearboxType")?.value,
      model: this.form.get("model")?.value,
      officeId: this.form.get("officeId")?.value
    })
    this.carAddSuccess$.subscribe(() => this.dialogRef.close(true))
  }

  deleteCar(carId: string): void {
    this.carFacade.deleteCar(carId)
    this.carDeleteSuccess$.subscribe(() => this.dialogRef.close(true))
  }

}
