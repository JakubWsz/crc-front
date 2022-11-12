import {Component, OnDestroy, OnInit} from '@angular/core';
import {OfficeService} from "../../../../store/office/office.service";
import {OfficeInterface} from "../../../../shared/interfaces/office.interface";
import {Observable, of, Subject, takeUntil} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AddUpdateFormComponent} from "../add-update-form/add-update-form.component";
import {OfficeFacade} from "../../../../store/office/office.facade";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  createCarForm = this.fb.group({
    streetAddress: ['', Validators.required],
    postalCode: ['', Validators.required],
    cityName: ['', Validators.required],
    websiteUrl: ['', Validators.required],
    officeCeo: ['', Validators.required]
  });

  displayedColumns: string[] = ['streetAddress', 'postalCode', 'cityName', 'officeCEO', 'actions'];
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  officeList$: Observable<OfficeInterface[]> = this.officeFacade.officeListItems$

  constructor(private fb: FormBuilder, private officeService: OfficeService, private _snackBar: MatSnackBar,
              private dialog: MatDialog, private officeFacade: OfficeFacade) {
  }

  ngOnInit(): void {
    this.officeFacade.getOfficeList()
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  deleteOffice(officeId: string) {
    this.officeFacade.deleteOffice(officeId);
  }

  updateOffice(office: OfficeInterface): void {
    this.dialog.open(AddUpdateFormComponent, {
      data: this.getOfficeData(office)

    });
    console.log(office);
  }

  isDisabled(): boolean {
    return this.createCarForm.invalid
  }

  getOfficeData(office: OfficeInterface) {
    return {
      isEdit: true,
      office: {
        id: office.id,
        streetAddress: office.addressDto.streetAddress,
        postalCode: office.addressDto.postalCode,
        cityName: office.addressDto.cityName,
        websiteUrl: office.websiteURL,
        officeCeo: office.officeCEO
      }
    }
  }
}
