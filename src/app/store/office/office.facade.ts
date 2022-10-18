import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {GetListOffice} from "./office.actions";
import {AppState} from "../app.state";
import {selectOfficeListItems} from "./office.selectors";

@Injectable()
export class OfficeFacade{
  officeListItems$ = this.store.select(selectOfficeListItems)
  constructor(private store: Store<AppState>) {}

  public getOfficeList(): void{
    this.store.dispatch(new GetListOffice());
  }
}
