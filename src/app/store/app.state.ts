import {OfficeState} from "./office/office.state";
import {CarState} from "./car/car.state";

export interface AppState {
  office: OfficeState;
  car: CarState;
}
