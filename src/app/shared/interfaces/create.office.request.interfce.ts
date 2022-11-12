import {AddressDto} from "./addres-dto.interface";

export interface CreateOfficeRequest {
  addressDto: AddressDto;
  websiteUrl: string;
  officeCeo: string;
}
