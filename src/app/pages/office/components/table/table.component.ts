import {Component, OnDestroy, OnInit} from '@angular/core';
import {OfficeService} from "../../../../shared/services/office.service";
import {OfficeInterface} from "../../../../shared/interfaces/office.interface";
import {Subject, takeUntil} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(private fb: FormBuilder, private officeService: OfficeService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getOfficeList();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  onSubmit(): void {
    const createOfficeRequest = {
      addressDTO: {
        streetAddress: this.createCarForm.get('streetAddress')?.value,
        postalCode: this.createCarForm.get('postalCode')?.value,
        cityName: this.createCarForm.get('cityName')?.value,
      },
      websiteUrl: this.createCarForm.get('websiteUrl')?.value,
      officeCeo: this.createCarForm.get('officeCeo')?.value,
    }
    console.log(createOfficeRequest)
    this.officeService.addOfficeRequest(createOfficeRequest).subscribe(() => {
      this._snackBar.open("office created", "OK")
    });
    this.cleanForm()
  }

  deleteOffice(officeId: string) {
    this.officeService.deleteOffice(officeId).subscribe(() => {
      this.getOfficeList()
      this._snackBar.open("office deleted", "OK")
    });
  }

  cleanForm(): void {
    this.createCarForm.reset()
  }

  isDisabled(): boolean {
    return this.createCarForm.invalid
  }

  private getOfficeList(): void {
    this.officeService.getOfficeList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((officeList: OfficeInterface[]) => {
        this.officeList = officeList
      })
  }

}
