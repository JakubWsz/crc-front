import {Action} from '@ngrx/store';
import {HttpErrorResponse} from "@angular/common/http";
import {OfficeRequest} from "../../shared/api/models/office-request";
import {OfficeResponse} from "../../shared/api/models/office-response";
import {UpdateOfficeRequestInterface} from "../../shared/interfaces/update-office-request.interface";

export enum OfficeActionsTypes {
  getList = "[Office/List] Get List Office",
  getListSuccess = "[Office/List] Get List Office Success",
  getListFail = "[Office/List] Get List Office Fail",
  getListClear = "[Office/List] Get List Office Clear",
  getListClearError = "[Office/List] Get List Office Clear Error",

  add = "[Office/Add] Add Office",
  addSuccess = "[Office/Add] Add Office Success",
  addFail = "[Office/Add] Add Office Fail",
  addClear = "[Office/Add] Add Office Clear",
  addClearError = "[Office/Add] Add Office Clear Error",

  delete = "[Office/Delete] Delete Office",
  deleteSuccess = "[Office/Delete] Delete Office Success",
  deleteFail = "[Office/Delete] Delete Office Fail",
  deleteClear = "[Office/Delete] Delete Office Clear",
  deleteClearError = "[Office/Delete] Delete Clear Error",

  update = "[Office/Update] Update Office",
  updateSuccess = "[Office/Update] Update Office Success",
  updateFail = "[Office/Update] Update Office Fail",
  updateClear = "[Office/Update] Update Office Clear",
  updateClearError = "[Office/Update] Delete Clear Error",
}

//Get List
export class GetListOffice implements Action {
  readonly type = OfficeActionsTypes.getList;
}

export class GetListOfficeSuccess implements Action {
  readonly type = OfficeActionsTypes.getListSuccess;

  constructor(public payload: OfficeResponse[] | undefined) {
  }
}

export class GetListOfficeFail implements Action {
  readonly type = OfficeActionsTypes.getListFail;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class GetListOfficeClear implements Action {
  readonly type = OfficeActionsTypes.getListClear;
}

export class GetListOfficeClearError implements Action {
  readonly type = OfficeActionsTypes.getListClearError;
}

//Add Office
export class AddOffice implements Action {
  readonly type = OfficeActionsTypes.add;

  constructor(public payload: OfficeRequest) {
  }
}

export class AddOfficeSuccess implements Action {
  readonly type = OfficeActionsTypes.addSuccess;
}

export class AddOfficeFail implements Action {
  readonly type = OfficeActionsTypes.addFail;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class AddOfficeClear implements Action {
  readonly type = OfficeActionsTypes.addClear;
}

export class AddOfficeClearError implements Action {
  readonly type = OfficeActionsTypes.addClearError;
}

//Delete Office
export class DeleteOffice implements Action {
  readonly type = OfficeActionsTypes.delete;

  constructor(public payload: string) {
  }
}

export class DeleteOfficeSuccess implements Action {
  readonly type = OfficeActionsTypes.deleteSuccess;
}

export class DeleteOfficeFail implements Action {
  readonly type = OfficeActionsTypes.deleteFail;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class DeleteOfficeClear implements Action {
  readonly type = OfficeActionsTypes.deleteClear;
}

export class DeleteOfficeClearError implements Action {
  readonly type = OfficeActionsTypes.deleteClearError;
}

export class UpdateOffice implements Action {
  readonly type = OfficeActionsTypes.update;

  constructor(public payload: UpdateOfficeRequestInterface) {
  }
}

export class UpdateOfficeSuccess implements Action {
  readonly type = OfficeActionsTypes.updateSuccess
}

export class UpdateOfficeFail implements Action {
  readonly type = OfficeActionsTypes.updateFail

  constructor(public payload: HttpErrorResponse) {
  }
}

export class UpdateOfficeClear implements Action {
  readonly type = OfficeActionsTypes.updateClear;
}

export class UpdateOfficeClearError implements Action {
  readonly type = OfficeActionsTypes.updateClearError;
}

export type OfficeActions =
  | GetListOffice
  | GetListOfficeSuccess
  | GetListOfficeFail
  | GetListOfficeClear
  | GetListOfficeClearError
  | AddOffice
  | AddOfficeSuccess
  | AddOfficeFail
  | AddOfficeClear
  | AddOfficeClearError
  | DeleteOffice
  | DeleteOfficeSuccess
  | DeleteOfficeFail
  | DeleteOfficeClear
  | DeleteOfficeClearError
  | UpdateOffice
  | UpdateOfficeSuccess
  | UpdateOfficeFail
  | UpdateOfficeClear
  | UpdateOfficeClearError;
