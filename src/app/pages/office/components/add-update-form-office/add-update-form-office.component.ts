import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OfficeFacade} from "../../../../store/office/office.facade";

@Component({
  selector: 'app-add-update-form',
  templateUrl: './add-update-form-office.component.html',
  styleUrls: ['./add-update-form.component.css']
})
export class AddUpdateFormOfficeComponent implements OnInit {

  form: FormGroup = this.fb.group({
    streetAddress: ['', Validators.required],
    postalCode: ['', Validators.required],
    cityName: ['', Validators.required],
    websiteUrl: ['', Validators.required],
    officeCeo: ['', Validators.required]
  });
  contentRequiredAlert = 'Ta wartość jest wymagana';
  submitOffice = `${this.isEdit ? "Edytuj" : "Dodaj"} biuro`;
  clean = 'Wyczyść';

  officeAddSuccess$ = this.officeFacade.officeAddSuccess$;
  officeAddLoading$ = this.officeFacade.officeAddLoading$;
  officeUpdateSuccess$ = this.officeFacade.officeUpdateSuccess$;
  officeDeleteSuccess$ = this.officeFacade.officeDeleteSuccess$;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) private data: any, private officeFacade: OfficeFacade,
              private dialogRef: MatDialogRef<AddUpdateFormOfficeComponent>) {
  }

  ngOnInit(): void {
    this.isEdit ? this.form.patchValue(this.data?.office) : null;
  }

  onSubmit(): void {
    this.isEdit ? this.updateOffice() : this.addOffice();
  }

  cleanForm(): void {
    this.form.reset()
  }

  isDisabled(): boolean {
    return this.form.invalid
  }

  addOffice(): void {
    this.officeFacade.addOffice({
      addressDto: {
        streetAddress: this.form.get('streetAddress')?.value,
        postalCode: this.form.get('postalCode')?.value,
        cityName: this.form.get('cityName')?.value,
      },
      websiteUrl: this.form.get('websiteUrl')?.value,
      officeCeo: this.form.get('officeCeo')?.value
    })
    this.officeAddSuccess$.subscribe(() => this.dialogRef.close(true))
  }

  updateOffice(): void {
    this.officeFacade.updateOffice({
      id: this.data.id,
      content: {
        addressDto: {
          streetAddress: this.form.get('streetAddress')?.value,
          postalCode: this.form.get('postalCode')?.value,
          cityName: this.form.get('cityName')?.value,
        },
        websiteUrl: this.form.get('websiteUrl')?.value,
        officeCeo: this.form.get('officeCeo')?.value
      }
    })
    this.officeUpdateSuccess$.subscribe(() => this.dialogRef.close(true))
  }

  deleteOffice(officeId: string): void {
    this.officeFacade.deleteOffice(officeId)
    this.officeDeleteSuccess$.subscribe(() => this.dialogRef.close(true))
  }

  get isEdit(): boolean {
    return this.data?.isEdit
  }
}
