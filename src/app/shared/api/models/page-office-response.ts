/* tslint:disable */
/* eslint-disable */
import { OfficeResponse } from './office-response';
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
export interface PageOfficeResponse {
  content?: Array<OfficeResponse>;
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
