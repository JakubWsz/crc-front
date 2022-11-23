import {ActionReducerMap} from '@ngrx/store'
import {AppState} from "./app.state";
import {OfficeReducers} from "./office/office.reducers";
import {CarReducers} from "./car/car.reducers";

export const appReducers: ActionReducerMap<AppState> = {
  // @ts-ignore
  office: OfficeReducers,
  // @ts-ignore
  car: CarReducers
}
