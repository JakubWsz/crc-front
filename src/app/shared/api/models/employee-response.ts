/* tslint:disable */
/* eslint-disable */
import { AddressDto } from './address-dto';
export interface EmployeeResponse {
  accountNumber: string;
  address: AddressDto;
  contractType: 'EMPLOYMENT_CONTRACT' | 'MANDATE_CONTRACT' | 'SPECIFIC_TASK_CONTRACT' | 'B2B';
  firstname: string;
  id: string;
  lastname: string;
  officeId: string;
  pesel: string;
  position: string;
  salaryAmount: number;
}
