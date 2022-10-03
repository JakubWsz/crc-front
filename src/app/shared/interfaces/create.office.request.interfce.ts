import {AddressDTO} from "./addresDto.interface";

export interface CreateOfficeRequest {
  addressDTO: AddressDTO;
  websiteUrl: string;
  officeCeo: string;
}
