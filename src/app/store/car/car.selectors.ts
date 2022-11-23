import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {CarState} from "./car.state";
import {LoadingHandlerInterface} from "../../shared/interfaces/loading-handler.interface";
import {CarPageInterface} from "../interfaces/car-page.interface";

const selectCar = (state: AppState) => state.car

//selectors page
const selectCarPage = createSelector(
  selectCar, (state: CarState) => state.page)

export const selectCarPageItems = createSelector(
  selectCarPage,
  (state: CarPageInterface) => state.items
)

export const selectCarPageLoading = createSelector(
  selectCarPage,
  (state: CarPageInterface) => state.loading
)

export const selectCarPageSuccess = createSelector(
  selectCarPage,
  (state: CarPageInterface) => state.success
)

export const selectCarPageError = createSelector(
  selectCarPage,
  (state: CarPageInterface) => state.error
)

//selectors add
const selectCarAdd = createSelector(
  selectCar, (state: CarState) => state.add)

export const selectCarAddLoading = createSelector(
  selectCarAdd,
  (state: LoadingHandlerInterface) => state.loading
)

export const selectCarAddSuccess = createSelector(
  selectCarAdd,
  (state: LoadingHandlerInterface) => state.success
)

export const selectCarAddError = createSelector(
  selectCarAdd,
  (state: LoadingHandlerInterface) => state.error
)

//selectors delete
export const selectCarDelete = createSelector(
  selectCar,
  (state: CarState) => state.delete
)

export const selectCarDeleteLoading = createSelector(
  selectCarDelete,
  (state: LoadingHandlerInterface) => state.loading
)

export const selectCarDeleteSuccess = createSelector(
  selectCarDelete,
  (state: LoadingHandlerInterface) => state.success
)

export const selectCarDeleteError = createSelector(
  selectCarDelete,
  (state: LoadingHandlerInterface) => state.error
)
