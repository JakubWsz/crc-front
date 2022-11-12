export interface OfficeInterface {

  id: string;
  addressDto: {
    streetAddress: string;
    postalCode: string;
    cityName: string;
  },
  websiteURL: string;
  officeCEO: string;
}
