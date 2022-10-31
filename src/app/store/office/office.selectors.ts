import {AppState} from "../app.state";
import {OfficeState} from "./office.state";
import {createSelector} from "@ngrx/store";
import {OfficeListInterface} from "./interfaces/office-list.interface";
import {LoadingHandlerInterface} from "../../shared/interfaces/loading-handler.interface";

const selectOffice = (state: AppState) => state.office

//selectors list
const selectOfficeList = createSelector(
  selectOffice, (state: OfficeState) => state.list)

export const selectOfficeListItems = createSelector(
  selectOfficeList,
  (state: OfficeListInterface) => state.items
)

export const selectOfficeListLoading = createSelector(
  selectOfficeList,
  (state: OfficeListInterface) => state.loading
)

export const selectOfficeListSuccess = createSelector(
  selectOfficeList,
  (state: OfficeListInterface) => state.success
)

export const selectOfficeListError = createSelector(
  selectOfficeList,
  (state: OfficeListInterface) => state.error
)

//selectors add
const selectOfficeAdd = createSelector(
  selectOffice, (state: OfficeState) => state.add)

export const selectOfficeAddLoading = createSelector(
  selectOfficeAdd,
  (state: LoadingHandlerInterface) => state.loading
)

export const selectOfficeAddSuccess = createSelector(
  selectOfficeAdd,
  (state: LoadingHandlerInterface) => state.success
)

export const selectOfficeAddError = createSelector(
  selectOfficeAdd,
  (state: LoadingHandlerInterface) => state.error
)

// @TODO: 1. g) Stworzyć selektory które ze stora "wyciągną" dane wartości (analogicznie do dodawania)
//  - stworzyć "selectOfficeDelete"
//  - stworzyć i wyeksportować selektory dla loading, success, error

// @TODO: 2. g) Stworzyć selektory które ze stora "wyciągną" dane wartości (analogicznie do dodawania)
//  - stworzyć "selectOfficeUpdate"
//  - stworzyć i wyeksportować selektory dla loading, success, error

