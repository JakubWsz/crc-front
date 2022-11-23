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

import { EmployeeRequest } from '../models/employee-request';
import { EmployeeResponse } from '../models/employee-response';
import { EmployeeSpecification } from '../models/employee-specification';
import { PageEmployeeResponse } from '../models/page-employee-response';
import { Pageable } from '../models/pageable';

@Injectable({
  providedIn: 'root',
})
export class EmployeeControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateEmployee
   */
  static readonly UpdateEmployeePath = '/employee/{id}/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEmployee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEmployee$Response(params: {
    id: string;
    context?: HttpContext
    body: EmployeeRequest
  }
): Observable<StrictHttpResponse<EmployeeResponse>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeControllerService.UpdateEmployeePath, 'put');
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
        return r as StrictHttpResponse<EmployeeResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateEmployee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEmployee(params: {
    id: string;
    context?: HttpContext
    body: EmployeeRequest
  }
): Observable<EmployeeResponse> {

    return this.updateEmployee$Response(params).pipe(
      map((r: StrictHttpResponse<EmployeeResponse>) => r.body as EmployeeResponse)
    );
  }

  /**
   * Path part for operation createEmployee
   */
  static readonly CreateEmployeePath = '/employee/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createEmployee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEmployee$Response(params: {
    context?: HttpContext
    body: EmployeeRequest
  }
): Observable<StrictHttpResponse<EmployeeResponse>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeControllerService.CreateEmployeePath, 'post');
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
        return r as StrictHttpResponse<EmployeeResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createEmployee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEmployee(params: {
    context?: HttpContext
    body: EmployeeRequest
  }
): Observable<EmployeeResponse> {

    return this.createEmployee$Response(params).pipe(
      map((r: StrictHttpResponse<EmployeeResponse>) => r.body as EmployeeResponse)
    );
  }

  /**
   * Path part for operation getFilteredClients
   */
  static readonly GetFilteredClientsPath = '/employee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFilteredClients()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFilteredClients$Response(params: {
    specification: EmployeeSpecification;
    pageable: Pageable;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PageEmployeeResponse>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeControllerService.GetFilteredClientsPath, 'get');
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
        return r as StrictHttpResponse<PageEmployeeResponse>;
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
    specification: EmployeeSpecification;
    pageable: Pageable;
    context?: HttpContext
  }
): Observable<PageEmployeeResponse> {

    return this.getFilteredClients$Response(params).pipe(
      map((r: StrictHttpResponse<PageEmployeeResponse>) => r.body as PageEmployeeResponse)
    );
  }

  /**
   * Path part for operation removeEmployee
   */
  static readonly RemoveEmployeePath = '/employee/{id}/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeEmployee()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeEmployee$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeControllerService.RemoveEmployeePath, 'delete');
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
   * To access the full response (for headers, for example), `removeEmployee$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeEmployee(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.removeEmployee$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
