import {Component, OnInit} from '@angular/core';

import {MatDialog} from "@angular/material/dialog";
import {AddFormCarComponent} from "./components/add-form-car/add-form-car.component";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  createCar() {
    this.dialog.open(AddFormCarComponent, {
      minWidth: "400px"
    })
  }
}
