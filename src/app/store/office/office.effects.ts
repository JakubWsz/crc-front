import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {OfficeService} from "./office.service";
import {
  AddOffice, AddOfficeFail,
  AddOfficeSuccess, DeleteOffice, DeleteOfficeFail, DeleteOfficeSuccess, GetListOffice,
  GetListOfficeFail,
  GetListOfficeSuccess,
  OfficeActionsTypes
} from "./office.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {AppState} from "../app.state";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable()
export class OfficeEffects {
  constructor(private actions: Actions, private store: Store<AppState>, private officeService: OfficeService) {
  }

  getOfficeList$ = createEffect(() =>
    this.actions.pipe(
      ofType(OfficeActionsTypes.getList),
      switchMap(() =>
        this.officeService.getOfficeListRequest().pipe(
          //@ts-ignore
          map(response => new GetListOfficeSuccess(response.content)),
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

    deleteOffice$ = createEffect(() =>
    this.actions.pipe(
      ofType(OfficeActionsTypes.delete),
      switchMap((action: DeleteOffice)=>
      this.officeService.deleteOfficeRequest(action.payload).pipe(
        switchMap((response)=>[
          new DeleteOfficeSuccess(),
          new GetListOffice()
        ]),
        catchError(error => of(new DeleteOfficeFail(error)))
      ))
    ))

  // @TODO: 2. e) Dodać effect dla edycji (analogicznie do dodawania, w action.payload będzie cały obiekt w którym będzie zawarte "id" oraz reszta pól)
}
