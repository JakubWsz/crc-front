import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddUpdateFormComponent} from "./components/add-update-form/add-update-form.component";

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
  this.dialog.open(AddUpdateFormComponent,{
    minWidth: "400px"
  })
  }
}
