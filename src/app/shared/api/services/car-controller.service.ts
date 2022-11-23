/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CarRequest } from '../models/car-request';
import { CarResponse } from '../models/car-response';
import { CarSpecification } from '../models/car-specification';
import { PageCarResponse } from '../models/page-car-response';
import { Pageable } from '../models/pageable';

@Injectable({
  providedIn: 'root',
})
export class CarControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createCar
   */
  static readonly CreateCarPath = '/car/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCar$Response(params: {
    context?: HttpContext
    body: CarRequest
  }
): Observable<StrictHttpResponse<CarResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CarControllerService.CreateCarPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCar(params: {
    context?: HttpContext
    body: CarRequest
  }
): Observable<CarResponse> {

    return this.createCar$Response(params).pipe(
      map((r: StrictHttpResponse<CarResponse>) => r.body as CarResponse)
    );
  }

  /**
   * Path part for operation getFilteredCars
   */
  static readonly GetFilteredCarsPath = '/car';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFilteredCars()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFilteredCars$Response(params: {
    specification: CarSpecification;
    pageable: Pageable;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PageCarResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CarControllerService.GetFilteredCarsPath, 'get');
    if (params) {
      rb.query('specification', params.specification, {});
      rb.query('pageable', params.pageable, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PageCarResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getFilteredCars$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFilteredCars(params: {
    specification: CarSpecification;
    pageable: Pageable;
    context?: HttpContext
  }
): Observable<PageCarResponse> {

    return this.getFilteredCars$Response(params).pipe(
      map((r: StrictHttpResponse<PageCarResponse>) => r.body as PageCarResponse)
    );
  }

  /**
   * Path part for operation getCarById
   */
  static readonly GetCarByIdPath = '/car/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCarById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCarById$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CarResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CarControllerService.GetCarByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCarById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCarById(params: {
    id: string;
    context?: HttpContext
  }
): Observable<CarResponse> {

    return this.getCarById$Response(params).pipe(
      map((r: StrictHttpResponse<CarResponse>) => r.body as CarResponse)
    );
  }

  /**
   * Path part for operation removeCar
   */
  static readonly RemoveCarPath = '/car/{id}/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeCar()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeCar$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CarControllerService.RemoveCarPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `removeCar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeCar(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.removeCar$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
