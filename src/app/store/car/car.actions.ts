import {Action} from "@ngrx/store";
import {CarResponse} from "../../shared/api/models/car-response";
import {HttpErrorResponse} from "@angular/common/http";
import {CarRequest} from "../../shared/api/models/car-request";


export enum CarActionsTypes {
  getPage = "[Car/Page] Get Page Car",
  getPageSuccess = "[Car/Page] Get Page Car Success",
  getPageFail = "[Car/Page] Get Page Car Fail",
  getPageClear = "[Car/Page] Get Page Car Clear",
  getPageClearError = "[Car/Page] Get Page Car Clear Error",

  add = "[Car/Add] Add Car",
  addSuccess = "[Car/Add] Add Car Success",
  addFail = "[Car/Add] Add Car Fail",
  addClear = "[Car/Add] Add Car Clear",
  addClearError = "[Car/Add] Add Car Clear Error",

  delete = "[Car/Delete] Delete Car",
  deleteSuccess = "[Car/Delete] Delete Car Success",
  deleteFail = "[Car/Delete] Delete Car Fail",
  deleteClear = "[Car/Delete] Delete Car Clear",
  deleteClearError = "[Car/Delete] Delete Clear Error",
}

//Get Page
export class GetPageCar implements Action {
  readonly type = CarActionsTypes.getPage;
}

export class GetPageCarSuccess implements Action {
  readonly type = CarActionsTypes.getPageSuccess;

  constructor(public payload: CarResponse[] | undefined) {
  }
}

export class GetPageCarFail implements Action {
  readonly type = CarActionsTypes.getPageFail;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class GetPageCarClear implements Action {
  readonly type = CarActionsTypes.getPageClear;
}

export class GetPageCarClearError implements Action {
  readonly type = CarActionsTypes.getPageClearError;
}

//Add Car
export class AddCar implements Action {
  readonly type = CarActionsTypes.add;

  constructor(public payload: CarRequest) {
  }
}

export class AddCarSuccess implements Action {
  readonly type = CarActionsTypes.addSuccess;
}

export class AddCarFail implements Action {
  readonly type = CarActionsTypes.addFail;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class AddCarClear implements Action {
  readonly type = CarActionsTypes.addClear;
}

export class AddCarClearError implements Action {
  readonly type = CarActionsTypes.addClearError;
}

//Delete Car
export class DeleteCar implements Action {
  readonly type = CarActionsTypes.delete;

  constructor(public payload: string) {
  }
}

export class DeleteCarSuccess implements Action {
  readonly type = CarActionsTypes.deleteSuccess;
}

export class DeleteCarFail implements Action {
  readonly type = CarActionsTypes.deleteFail;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class DeleteCarClear implements Action {
  readonly type = CarActionsTypes.deleteClear;
}

export class DeleteCarClearError implements Action {
  readonly type = CarActionsTypes.deleteClearError;
}

export type CarActions =
  | GetPageCar
  | GetPageCarSuccess
  | GetPageCarFail
  | GetPageCarClear
  | GetPageCarClearError
  | AddCar
  | AddCarSuccess
  | AddCarFail
  | AddCarClear
  | AddCarClearError
  | DeleteCar
  | DeleteCarSuccess
  | DeleteCarFail
  | DeleteCarClear
  | DeleteCarClearError;

