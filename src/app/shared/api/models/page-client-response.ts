/* tslint:disable */
/* eslint-disable */
import { ClientResponse } from './client-response';
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
export interface PageClientResponse {
  content?: Array<ClientResponse>;
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
