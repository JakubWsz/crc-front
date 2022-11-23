import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {CarFacade} from "../../../../store/car/car.facade";
import {Observable, Subject} from "rxjs";
import {CarResponse} from "../../../../shared/api/models/car-response";

@Component({
  selector: 'app-table-car',
  templateUrl: './table-car.component.html',
  styleUrls: ['./table-car.component.css']
})
export class TableCarComponent implements OnInit, OnDestroy {
  createCarForm = this.fb.group({
    brand: ['', Validators.required],
    model: ['', Validators.required],
    carType: ['', Validators.required],
    fuelType: ['', Validators.required],
    gearboxType: ['', Validators.required],
    doorNumber: ['', Validators.required],
    bootCapacity: ['', Validators.required],
    officeId: ['', Validators.required],
  });

  displayedColumns: string[] = ['brand', 'model', 'carType', 'fuelType', 'gearboxType', 'doorNumber',
    'bootCapacity', 'officeId', 'actions'];
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  carPage$: Observable<CarResponse[] | undefined> = this.carFacade.carPageItems$

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,
              private dialog: MatDialog, private carFacade: CarFacade) {
  }

  ngOnInit(): void {
    this.carFacade.getCarPage();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  deleteCar(carId: string): void {
    this.carFacade.deleteCar(carId);
  }

  isDisabled(): boolean {
    return this.createCarForm.invalid
  }

}
