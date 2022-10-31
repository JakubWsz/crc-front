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

import { OfficeRequest } from '../models/office-request';
import { OfficeResponse } from '../models/office-response';
import { OfficeSpecification } from '../models/office-specification';
import { PageOfficeResponse } from '../models/page-office-response';
import { Pageable } from '../models/pageable';

@Injectable({
  providedIn: 'root',
})
export class OfficeControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateOffice
   */
  static readonly UpdateOfficePath = '/office/{id}/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOffice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOffice$Response(params: {
    id: string;
    context?: HttpContext
    body: OfficeRequest
  }
): Observable<StrictHttpResponse<OfficeResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OfficeControllerService.UpdateOfficePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OfficeResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateOffice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOffice(params: {
    id: string;
    context?: HttpContext
    body: OfficeRequest
  }
): Observable<OfficeResponse> {

    return this.updateOffice$Response(params).pipe(
      map((r: StrictHttpResponse<OfficeResponse>) => r.body as OfficeResponse)
    );
  }

  /**
   * Path part for operation createOffice
   */
  static readonly CreateOfficePath = '/office/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOffice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOffice$Response(params: {
    context?: HttpContext
    body: OfficeRequest
  }
): Observable<StrictHttpResponse<OfficeResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OfficeControllerService.CreateOfficePath, 'post');
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
        return r as StrictHttpResponse<OfficeResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createOffice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOffice(params: {
    context?: HttpContext
    body: OfficeRequest
  }
): Observable<OfficeResponse> {

    return this.createOffice$Response(params).pipe(
      map((r: StrictHttpResponse<OfficeResponse>) => r.body as OfficeResponse)
    );
  }

  /**
   * Path part for operation getFilteredClients
   */
  static readonly GetFilteredClientsPath = '/office';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFilteredClients()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFilteredClients$Response(params: {
    specification: OfficeSpecification;
    pageable: Pageable;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PageOfficeResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OfficeControllerService.GetFilteredClientsPath, 'get');
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
        return r as StrictHttpResponse<PageOfficeResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getFilteredClients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFilteredClients(params: {
    specification: OfficeSpecification;
    pageable: Pageable;
    context?: HttpContext
  }
): Observable<PageOfficeResponse> {

    return this.getFilteredClients$Response(params).pipe(
      map((r: StrictHttpResponse<PageOfficeResponse>) => r.body as PageOfficeResponse)
    );
  }

  /**
   * Path part for operation deleteOffice
   */
  static readonly DeleteOfficePath = '/office/{id}/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOffice()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOffice$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OfficeControllerService.DeleteOfficePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteOffice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOffice(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.deleteOffice$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
