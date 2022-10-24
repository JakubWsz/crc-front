import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {OfficeService} from "../../../../store/office/office.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CreateOfficeRequest} from "../../../../shared/interfaces/create.office.request.interfce";
import {OfficeFacade} from "../../../../store/office/office.facade";
import {OfficeAddPayload} from "../../../../store/office/interfaces/office-add-payload.interface";

@Component({
  selector: 'app-add-update-form',
  templateUrl: './add-update-form.component.html',
  styleUrls: ['./add-update-form.component.css']
})
export class AddUpdateFormComponent implements OnInit {

  form = this.fb.group({
    streetAddress: ['', Validators.required],
    postalCode: ['', Validators.required],
    cityName: ['', Validators.required],
    websiteUrl: ['', Validators.required],
    officeCeo: ['', Validators.required]
  });
  contentRequiredAlert = 'Ta wartość jest wymagana';
  submitOffice = `${this.isEdit ? "Edytuj" : "Dodaj"} biuro`;
  clean = 'Wyczyść';

  constructor(private fb: FormBuilder, private officeService: OfficeService, private _snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) private data: any, private officeFacade: OfficeFacade) {
  }

  get isEdit(): boolean {
    return this.data?.isEdit
  }

  ngOnInit(): void {
    this.isEdit ? this.form.patchValue(this.data?.office) : null;
  }

  onSubmit(): void {
    const createOfficeRequest: any = {
      addressDto: {
        streetAddress: this.form.get('streetAddress')?.value,
        postalCode: this.form.get('postalCode')?.value,
        cityName: this.form.get('cityName')?.value,
      },
      websiteUrl: this.form.get('websiteUrl')?.value,
      officeCeo: this.form.get('officeCeo')?.value,
    }
    console.log(createOfficeRequest)
    this.isEdit ? this.editOffice() : this.addOffice(createOfficeRequest);
    this.cleanForm()
  }

  cleanForm(): void {
    this.form.reset()
  }

  isDisabled(): boolean {
    return this.form.invalid
  }

  addOffice(addOffice: OfficeAddPayload): void {
    this.officeFacade.addOffice(addOffice)
  }

  editOffice(): void {
    console.log(this.data)
    this.officeService.updateOfficeRequest({
      keys: Object.keys(this.form.value),
      values: Object.values(this.form.value)
    }, {
      id: this.data.office.id
    }).subscribe();
  }
}
