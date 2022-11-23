import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AddOffice, DeleteOffice, GetListOffice, UpdateOffice} from "./office.actions";
import {AppState} from "../app.state";
import {
  selectOfficeAddError,
  selectOfficeAddLoading,
  selectOfficeAddSuccess,
  selectOfficeListError,
  selectOfficeListItems,
  selectOfficeListLoading,
  selectOfficeListSuccess,
  selectOfficeDelete,
  selectOfficeDeleteLoading,
  selectOfficeDeleteSuccess,
  selectOfficeDeleteError,
  selectOfficeUpdate,
  selectOfficeUpdateLoading,
  selectOfficeUpdateSuccess,
  selectOfficeUpdateError

} from "./office.selectors";

import {of} from "rxjs";
import {UpdateOfficeRequestInterface} from "../../shared/interfaces/update-office-request.interface";
import {OfficeRequest} from "../../shared/api/models/office-request";

@Injectable()
export class OfficeFacade {
  //selectors list
  officeListItems$ = this.store.select(selectOfficeListItems)
  officeListLoading$ = this.store.select(selectOfficeListLoading)
  officeListSuccess$ = this.store.select(selectOfficeListSuccess)
  officeListError$ = this.store.select(selectOfficeListError)

  //selectors add
  officeAddLoading$ = this.store.select(selectOfficeAddLoading)
  officeAddSuccess$ = this.store.select(selectOfficeAddSuccess)
  officeAddError$ = this.store.select(selectOfficeAddError)

  //selectors delete
  officeDelete$ = this.store.select(selectOfficeDelete)
  officeDeleteLoading$ = this.store.select(selectOfficeDeleteLoading)
  officeDeleteSuccess$ = this.store.select(selectOfficeDeleteSuccess)
  officeDeleteError$ = this.store.select(selectOfficeDeleteError)


  //selectors update
  officeUpdate$ = this.store.select(selectOfficeUpdate)
  officeUpdateLoading$ = this.store.select(selectOfficeDeleteLoading)
  officeUpdateSuccess$ = this.store.select(selectOfficeDeleteSuccess)
  officeUpdateError$ = this.store.select(selectOfficeDeleteError)


  constructor(private store: Store<AppState>) {
  }

  public getOfficeList(): void {
    this.store.dispatch(new GetListOffice());
  }

  public addOffice(office: OfficeRequest): void {
    this.store.dispatch(new AddOffice(office));
  }

  public deleteOffice(officeId: string): void {
    this.store.dispatch(new DeleteOffice(officeId))
  }

  public updateOffice(office: UpdateOfficeRequestInterface): void {
    this.store.dispatch(new UpdateOffice(office))
  }
}
