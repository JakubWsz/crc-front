import {OfficeInterface} from "../../../shared/interfaces/office.interface";

export interface OfficeListInterface {
  items: OfficeInterface[]
  loading: boolean
  success: boolean
  error: any
}
