/* tslint:disable */
/* eslint-disable */
export interface CarResponse {
  bootCapacity: number;
  brand: string;
  carType: 'PASSENGER' | 'VAN' | 'DELIVERY';
  doorNumber: '_3' | '_5';
  fuelType: 'DIESEL_OIL' | 'PETROL' | 'GAS';
  gearboxType: 'MANUAL' | 'AUTOMATIC';
  id: string;
  model: string;
  officeId: string;
}
