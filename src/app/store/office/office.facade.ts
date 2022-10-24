import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AddOffice, GetListOffice} from "./office.actions";
import {AppState} from "../app.state";
import {selectOfficeListItems} from "./office.selectors";
import {OfficeAddPayload} from "./interfaces/office-add-payload.interface";

@Injectable()
export class OfficeFacade{
  officeListItems$ = this.store.select(selectOfficeListItems)
  constructor(private store: Store<AppState>) {}

  public getOfficeList(): void{
    this.store.dispatch(new GetListOffice());
  }

  public addOffice(office: OfficeAddPayload): void{
    this.store.dispatch(new AddOffice(office));
  }
}
