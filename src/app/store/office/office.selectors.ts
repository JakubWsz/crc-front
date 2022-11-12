import {AppState} from "../app.state";
import {OfficeState} from "./office.state";
import {createSelector} from "@ngrx/store";
import {OfficeListInterface} from "./interfaces/office-list.interface";
import {LoadingHandlerInterface} from "../../shared/interfaces/loading-handler.interface";
import {OfficeUpdatePayload} from "./interfaces/office-update-payload.interface";

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

//selectors delete
export const selectOfficeDelete = createSelector(
  selectOffice,
  (state: OfficeState) => state.delete
)

export const selectOfficeDeleteLoading = createSelector(
  selectOfficeDelete,
  (state: LoadingHandlerInterface) => state.loading
)

export const selectOfficeDeleteSuccess = createSelector(
  selectOfficeDelete,
  (state: LoadingHandlerInterface) => state.success
)

export const selectOfficeDeleteError = createSelector(
  selectOfficeDelete,
  (state: LoadingHandlerInterface) => state.error
)

export const selectOfficeUpdate = createSelector(
  selectOffice,
  (state: OfficeState) => state.update
)

export const selectOfficeUpdateLoading = createSelector(
  selectOfficeUpdate,
  (state: LoadingHandlerInterface) => state.loading
)

export const selectOfficeUpdateSuccess = createSelector(
  selectOfficeUpdate,
  (state: LoadingHandlerInterface) => state.success
)

export const selectOfficeUpdateError = createSelector(
  selectOfficeUpdate,
  (state: LoadingHandlerInterface) => state.error
)

