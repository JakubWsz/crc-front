import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddUpdateFormOfficeComponent} from "./components/add-update-form-office/add-update-form-office.component";

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  createOffice() {
  this.dialog.open(AddUpdateFormOfficeComponent,{
    minWidth: "400px"
  })
  }
}
