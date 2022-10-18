import {OfficeListInterface} from "./interfaces/office-list.interface";
import {OfficeInterface} from "../../shared/interfaces/office.interface";

export interface OfficeState {
  list: OfficeListInterface,
  //add : AddInterface
}

export const officeInitialState: OfficeState = {
  list: {
    items: [],
    loading: false,
    success: false,
    error: null,
  }
}
