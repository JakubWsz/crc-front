import {Action} from '@ngrx/store';
import {OfficeInterface} from "../../shared/interfaces/office.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {OfficeAddPayload} from "./interfaces/office-add-payload.interface";

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

  // @TODO: 1. a) Dodać do enum wartości dla usuwania (analogicznie do dodawania/pobierania)

  // @TODO: 2. a) Dodać do enum wartości dla edycji (analogicznie do usuwania/dodawania/pobierania)
}

//Get List
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

//Add Office
export class AddOffice implements Action {
  readonly type = OfficeActionsTypes.add;

  constructor(public payload: OfficeAddPayload) {
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

// @TODO: 1. b) Dodać akcje dla usuwania
//  - DeleteOffice (w kontruktorze payload, którym będzie "id")
//  - DeleteOfficeSuccess
//  - DeleteOfficeFail
//  - DeleteOfficeClear
//  - DeleteOfficeClearError

// @TODO: 2. b) Dodać akcje dla edycji
//  - UpdateOffice (w kontruktorze payload, którym będzie "id" oraz resztę pól - interfejs podobny do dodawania - OfficeAddPayload - tylko dodatkowo jeszcze z "id" edytowanego elementu, można zrobić na to oddzielny interfejs)
//  - UpdateOfficeSuccess
//  - UpdateOfficeFail
//  - UpdateOfficeClear
//  - UpdateOfficeClearError

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
  | AddOfficeClearError;
  // @TODO: 1. c) Dodać stworzone klasy akcji dla usuwania do eksportowanego typu
  // @TODO: 2. c) Dodać stworzone klasy akcji dla edycji do eksportowanego typu

