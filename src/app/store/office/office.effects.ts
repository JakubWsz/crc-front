import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {OfficeControllerService} from "../../shared/api/services/office-controller.service";
import {
  AddOffice, AddOfficeFail,
  AddOfficeSuccess, DeleteOffice, DeleteOfficeFail, DeleteOfficeSuccess, GetListOffice,
  GetListOfficeFail,
  GetListOfficeSuccess,
  OfficeActionsTypes, UpdateOffice, UpdateOfficeFail
} from "./office.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {AppState} from "../app.state";

@Injectable()
export class OfficeEffects {
  constructor(private actions: Actions, private store: Store<AppState>,
              private officeService: OfficeControllerService) {
  }

  getOfficeList$ = createEffect(() =>
    this.actions.pipe(
      ofType(OfficeActionsTypes.getList),
      switchMap(() =>
        this.officeService.getPagedOffices({
          specification: {}, pageable: {}
        }).pipe(
          tap(response => console.log(response)),
          map(response => new GetListOfficeSuccess(response.content)),
          catchError(error => of(new GetListOfficeFail(error)))
        ))
    ))

  addOffice$ = createEffect(() =>
    this.actions.pipe(
      ofType(OfficeActionsTypes.add),
      switchMap((action: AddOffice) =>
        this.officeService.createOffice({body: action.payload}).pipe(
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
      switchMap((action: DeleteOffice) =>
        this.officeService.deleteOffice({id: action.payload}).pipe(
          switchMap((response) => [
            new DeleteOfficeSuccess(),
            new GetListOffice()
          ]),
          catchError(error => of(new DeleteOfficeFail(error)))
        ))
    ))

  updateOffice$ = createEffect(() =>
    this.actions.pipe(
      ofType(OfficeActionsTypes.update),
      switchMap((action: UpdateOffice) =>
        this.officeService.updateOffice({id: action.payload.id, body: action.payload.content}).pipe(
          switchMap((response) => [
            new UpdateOffice(action.payload),
            new GetListOffice()
          ]),
          catchError(error => of(new UpdateOfficeFail(error)))
        ))
    ))
}
