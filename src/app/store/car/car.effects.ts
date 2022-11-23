import {
  AddCar, AddCarFail,
  AddCarSuccess, GetPageCar,
  GetPageCarFail,
  GetPageCarSuccess,
  CarActionsTypes, DeleteCar, DeleteCarSuccess, DeleteCarFail
} from "./car.actions";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {CarControllerService} from "../../shared/api/services/car-controller.service";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {
  DeleteOffice,
  DeleteOfficeFail,
  DeleteOfficeSuccess,
  GetListOffice,
  OfficeActionsTypes
} from "../office/office.actions";

export class CarEffects {
  constructor(private actions: Actions, private store: Store<AppState>,
              private carService: CarControllerService) {
  }

  getCarPage$ = createEffect(() =>
    this.actions.pipe(
      ofType(CarActionsTypes.getPage),
      switchMap(() =>
        this.carService.getFilteredCars({
          specification: {}, pageable: {}
        }).pipe(
          tap(response => console.log(response)),
          map(response => new GetPageCarSuccess(response.content),
            catchError(error => of(new GetPageCarFail(error)))
          ))
      )))

  addCar$ = createEffect(() =>
    this.actions.pipe(
      ofType(OfficeActionsTypes.add),
      switchMap((action: AddCar) =>
        this.carService.createCar({body: action.payload}).pipe(
          switchMap((response) => [
            new AddCarSuccess(),
            new GetPageCar()
          ]),
          catchError(error => of(new AddCarFail(error)))
        ))
    ))

  deleteCar$ = createEffect(() =>
    this.actions.pipe(
      ofType(OfficeActionsTypes.delete),
      switchMap((action: DeleteCar) =>
        this.carService.removeCar({id: action.payload}).pipe(
          switchMap((response) => [
            new DeleteCarSuccess(),
            new GetPageCar()
          ]),
          catchError(error => of(new DeleteCarFail(error)))
        ))
    ))
}
