/* tslint:disable */
/* eslint-disable */
import { CarResponse } from './car-response';
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
export interface PageCarResponse {
  content?: Array<CarResponse>;
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
