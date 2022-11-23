import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {OfficeFacade} from "../../../../store/office/office.facade";
import {OfficeResponse} from "../../../../shared/api/models/office-response";
import {UpdateOfficeRequestInterface} from "../../../../shared/interfaces/update-office-request.interface";
import {AddUpdateFormOfficeComponent} from "../add-update-form-office/add-update-form-office.component";

@Component({
  selector: 'app-table-office',
  templateUrl: './table-office.component.html',
  styleUrls: ['./table-office.component.css']
})
export class TableOfficeComponent implements OnInit, OnDestroy {
  createOfficeForm = this.fb.group({
    streetAddress: ['', Validators.required],
    postalCode: ['', Validators.required],
    cityName: ['', Validators.required],
    websiteUrl: ['', Validators.required],
    officeCeo: ['', Validators.required]
  });

  displayedColumns: string[] = ['streetAddress', 'postalCode', 'cityName', 'officeCEO', 'actions'];
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  officeList$: Observable<OfficeResponse[] | undefined> = this.officeFacade.officeListItems$

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,
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

  updateOffice(office: UpdateOfficeRequestInterface): void {
    this.dialog.open(AddUpdateFormOfficeComponent, {
      data: this.getOfficeData(office)
    });
    console.log(office);
  }

  isDisabled(): boolean {
    return this.createOfficeForm.invalid
  }

  getOfficeData(office: UpdateOfficeRequestInterface) {
    return {
      isEdit: true,
      office: {
        id: office.id,
        streetAddress: office.content.addressDto.streetAddress,
        postalCode: office.content.addressDto.postalCode,
        cityName: office.content.addressDto.postalCode,
        websiteUrl: office.content.websiteUrl,
        officeCeo: office.content.officeCeo
      }
    }
  }
}
