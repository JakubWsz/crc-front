import {AppState} from "../app.state";
import {OfficeState} from "./office.state";
import {createSelector} from "@ngrx/store";
import {OfficeListInterface} from "./interfaces/office-list.interface";

const selectOffice = (state: AppState) => state.office

const selectOfficeList = createSelector(
  selectOffice,(state: OfficeState) => state.list)

export const selectOfficeListItems = createSelector(
  selectOfficeList,
  (state: OfficeListInterface) => state.items
)


