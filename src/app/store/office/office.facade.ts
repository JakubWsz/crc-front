import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AddOffice, GetListOffice} from "./office.actions";
import {AppState} from "../app.state";
import {
  selectOfficeAddError,
  selectOfficeAddLoading,
  selectOfficeAddSuccess, selectOfficeListError,
  selectOfficeListItems,
  selectOfficeListLoading, selectOfficeListSuccess
} from "./office.selectors";
import {OfficeAddPayload} from "./interfaces/office-add-payload.interface";

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

  constructor(private store: Store<AppState>) {}

  public getOfficeList(): void {
    this.store.dispatch(new GetListOffice());
  }

  public addOffice(office: OfficeAddPayload): void {
    this.store.dispatch(new AddOffice(office));
  }

}
