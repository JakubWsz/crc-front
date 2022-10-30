import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {OfficeService} from "./office.service";
import {
  AddOffice, AddOfficeFail,
  AddOfficeSuccess, GetListOffice,
  GetListOfficeFail,
  GetListOfficeSuccess,
  OfficeActionsTypes
} from "./office.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {AppState} from "../app.state";

@Injectable()
export class OfficeEffects {
  constructor(private actions: Actions, private store: Store<AppState>, private officeService: OfficeService) {
  }

  getOfficeList$ = createEffect(() =>
    this.actions.pipe(
      ofType(OfficeActionsTypes.getList),
      switchMap(() =>
        this.officeService.getOfficeListRequest().pipe(
          map(response => new GetListOfficeSuccess(response)),
          catchError(error => of(new GetListOfficeFail(error)))
        ))
    ))

  addOffice$ = createEffect(() =>
    this.actions.pipe(
      ofType(OfficeActionsTypes.add),
      switchMap((action: AddOffice) =>
        this.officeService.addOfficeRequest(action.payload).pipe(
          switchMap((response) => [
            new AddOfficeSuccess(),
            new GetListOffice()
          ]),
          catchError(error => of(new AddOfficeFail(error)))
        ))
    ))
}
