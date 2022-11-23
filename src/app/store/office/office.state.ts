
import {LoadingHandlerInterface} from "../../shared/interfaces/loading-handler.interface";
import {initialLoadingHandler} from "../../shared/models/initial-loading-handler.model";
import {OfficeListInterface} from "../interfaces/office-list.interface";

export interface OfficeState {
  list: OfficeListInterface;
  add: LoadingHandlerInterface;
  delete: LoadingHandlerInterface;
  update: LoadingHandlerInterface;
}

export const officeInitialState: OfficeState = {
  list: {
    items: [],
    ...initialLoadingHandler
  },
  add: initialLoadingHandler,
  delete: initialLoadingHandler,
  update: initialLoadingHandler
}
