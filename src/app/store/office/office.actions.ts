import {Action} from '@ngrx/store';
import {OfficeInterface} from "../../shared/interfaces/office.interface";
import {HttpErrorResponse} from "@angular/common/http";

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
  addClearError = "[Office/Add] Add Office Clear Error"
}

export class GetListOffice implements Action {
  readonly type = OfficeActionsTypes.getList;
}

export class GetListOfficeSuccess implements Action {
  readonly type = OfficeActionsTypes.getListSuccess;

  constructor(public payload: OfficeInterface[]) {
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

export type OfficeActions =
  | GetListOffice
  | GetListOfficeSuccess
  | GetListOfficeFail
  | GetListOfficeClear
  | GetListOfficeClearError;

