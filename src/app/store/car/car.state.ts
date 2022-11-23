import {LoadingHandlerInterface} from "../../shared/interfaces/loading-handler.interface";
import {initialLoadingHandler} from "../../shared/models/initial-loading-handler.model";
import {CarPageInterface} from "../interfaces/car-page.interface";

export interface CarState {
  page: CarPageInterface;
  add: LoadingHandlerInterface;
  delete: LoadingHandlerInterface;
  update: LoadingHandlerInterface;
}

export const CarInitialState: CarState = {
  page: {
    items: [],
    ...initialLoadingHandler
  },
  add: initialLoadingHandler,
  delete: initialLoadingHandler,
  update: initialLoadingHandler
}
