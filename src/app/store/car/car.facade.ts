import {Injectable} from "@angular/core";
import {
  selectCarAddError, selectCarAddLoading,
  selectCarAddSuccess, selectCarDelete, selectCarDeleteError, selectCarDeleteLoading, selectCarDeleteSuccess,
  selectCarPageError,
  selectCarPageItems, selectCarPageLoading, selectCarPageSuccess

} from "./car.selectors";

import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {AddCar, DeleteCar, GetPageCar} from "./car.actions";
import {CarRequest} from "../../shared/api/models/car-request";

@Injectable()
export class CarFacade {
  carPageItems$ = this.store.select(selectCarPageItems)
  carPageLoading$ = this.store.select(selectCarPageLoading)
  carPageSuccess$ = this.store.select(selectCarPageSuccess)
  carPageError$ = this.store.select(selectCarPageError)

  //selectors add
  carAddLoading$ = this.store.select(selectCarAddLoading)
  carAddSuccess$ = this.store.select(selectCarAddSuccess)
  carAddError$ = this.store.select(selectCarAddError)

  //selectors delete
  carDelete$ = this.store.select(selectCarDelete)
  carDeleteLoading$ = this.store.select(selectCarDeleteLoading)
  carDeleteSuccess$ = this.store.select(selectCarDeleteSuccess)
  carDeleteError$ = this.store.select(selectCarDeleteError)

  constructor(private store: Store<AppState>) {
  }

  public getCarPage(): void {
    this.store.dispatch(new GetPageCar());
  }

  public addCar(car: CarRequest): void {
    this.store.dispatch(new AddCar(car));
  }

  public deleteCar(carId: string): void {
    this.store.dispatch(new DeleteCar(carId))
  }
}
