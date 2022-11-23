import {LoadingHandlerInterface} from "../../shared/interfaces/loading-handler.interface";
import {OfficeResponse} from "../../shared/api/models/office-response";

export interface OfficeListInterface extends LoadingHandlerInterface {
  items: OfficeResponse[] | undefined;
}
