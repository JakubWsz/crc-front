import {Component, OnDestroy, OnInit} from '@angular/core';
import {OfficeService} from "../../../../store/office/office.service";
import {OfficeInterface} from "../../../../shared/interfaces/office.interface";
import {of, Subject, takeUntil} from "rxjs";
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

  officeList!: OfficeInterface[];
  displayedColumns: string[] = ['streetAddress', 'postalCode', 'cityName', 'officeCEO', 'actions'];
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder, private officeService: OfficeService, private _snackBar: MatSnackBar,
              private dialog: MatDialog, private officeFacade: OfficeFacade) {
  }

  ngOnInit(): void {
    this.getOfficeList();
    this.officeFacade.getOfficeList();
    this.officeFacade.officeListItems$.subscribe((items) => console.log(items))
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  deleteOffice(officeId: string) {
    this.officeService.deleteOfficeRequest(officeId).subscribe(() => {
      this.getOfficeList()
      this._snackBar.open("office deleted", "OK")
    });
  }

  updateOffice(office: OfficeInterface): void {
    // this.officeService.updateOfficeRequest()
    this.dialog.open(AddUpdateFormComponent, {
      data: {
        isEdit: true,
        office: {
          id: office.id,
          streetAddress: office.addressDTO.streetAddress,
          postalCode: office.addressDTO.postalCode,
          cityName: office.addressDTO.cityName,
          websiteUrl: office.websiteURL,
          officeCeo: office.officeCEO
          //todo zmapować office w metodzie
        }
      }
    });
    console.log(office);
  }

  isDisabled(): boolean {
    return this.createCarForm.invalid
  }

  private getOfficeList(): void {
    this.officeService.getOfficeListRequest()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((officeList: OfficeInterface[]) => {
        this.officeService.officeList = officeList;
        this.officeList = this.officeService.officeList
      });
  }

}
