import {AddressDto} from "../../../shared/interfaces/addres-dto.interface";

export interface OfficeAddPayload {
  addressDto: AddressDto;
  websiteUrl: string;
  officeCeo: string;
}
