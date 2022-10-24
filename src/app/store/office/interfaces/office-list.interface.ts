import {OfficeInterface} from "../../../shared/interfaces/office.interface";
import {LoadingHandlerInterface} from "../../../shared/interfaces/loading-handler.interface";

export interface OfficeListInterface extends LoadingHandlerInterface{
  items: OfficeInterface[]
}
