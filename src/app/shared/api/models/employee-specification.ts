/* tslint:disable */
/* eslint-disable */
import { AddressDto } from './address-dto';
export interface EmployeeSpecification {
  accountNumber?: string;
  addressDTO?: AddressDto;
  contractType?: 'EMPLOYMENT_CONTRACT' | 'MANDATE_CONTRACT' | 'SPECIFIC_TASK_CONTRACT' | 'B2B';
  firstname?: string;
  lastname?: string;
  officeId?: string;
  pesel?: string;
  position?: string;
  salaryAmount?: number;
}
