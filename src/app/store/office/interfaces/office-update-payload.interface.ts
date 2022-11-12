import {AddressDto} from "../../../shared/interfaces/addres-dto.interface";

export interface OfficeUpdatePayload {
  id: string;
  addressDto: AddressDto;
  websiteUrl: string;
  officeCeo: string;
}
