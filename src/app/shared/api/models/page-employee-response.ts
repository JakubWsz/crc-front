/* tslint:disable */
/* eslint-disable */
import { EmployeeResponse } from './employee-response';
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
export interface PageEmployeeResponse {
  content?: Array<EmployeeResponse>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
