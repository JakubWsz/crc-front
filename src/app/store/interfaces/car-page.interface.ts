import {LoadingHandlerInterface} from "../../shared/interfaces/loading-handler.interface";
import {CarResponse} from "../../shared/api/models/car-response";

export interface CarPageInterface extends LoadingHandlerInterface {
  items: CarResponse[] | undefined;
}
