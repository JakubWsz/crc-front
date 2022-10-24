import {AddressDTO} from "../../../shared/interfaces/addresDto.interface";

export interface OfficeAddPayload {
  addressDTO: AddressDTO;
  websiteUrl: string;
  officeCeo: string;
}
