/* tslint:disable */
/* eslint-disable */
export interface CarRequest {
  bootCapacity: number;
  brand: string;
  carType: 'PASSENGER' | 'VAN' | 'DELIVERY';
  doorNumber: '_3' | '_5';
  fuelType: 'DIESEL_OIL' | 'PETROL' | 'GAS';
  gearboxType: 'MANUAL' | 'AUTOMATIC';
  model: string;
  officeId: string;
}
