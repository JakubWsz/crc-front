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

import { ClientRequest } from '../models/client-request';
import { ClientResponse } from '../models/client-response';
import { ClientSpecification } from '../models/client-specification';
import { PageClientResponse } from '../models/page-client-response';
import { Pageable } from '../models/pageable';

@Injectable({
  providedIn: 'root',
})
export class ClientControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateClient
   */
  static readonly UpdateClientPath = '/client/{id}/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateClient$Response(params: {
    id: string;
    context?: HttpContext
    body: ClientRequest
  }
): Observable<StrictHttpResponse<ClientResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ClientControllerService.UpdateClientPath, 'put');
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
        return r as StrictHttpResponse<ClientResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateClient(params: {
    id: string;
    context?: HttpContext
    body: ClientRequest
  }
): Observable<ClientResponse> {

    return this.updateClient$Response(params).pipe(
      map((r: StrictHttpResponse<ClientResponse>) => r.body as ClientResponse)
    );
  }

  /**
   * Path part for operation createClient
   */
  static readonly CreateClientPath = '/client/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createClient$Response(params: {
    context?: HttpContext
    body: ClientRequest
  }
): Observable<StrictHttpResponse<ClientResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ClientControllerService.CreateClientPath, 'post');
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
        return r as StrictHttpResponse<ClientResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createClient(params: {
    context?: HttpContext
    body: ClientRequest
  }
): Observable<ClientResponse> {

    return this.createClient$Response(params).pipe(
      map((r: StrictHttpResponse<ClientResponse>) => r.body as ClientResponse)
    );
  }

  /**
   * Path part for operation getFilteredClients1
   */
  static readonly GetFilteredClients1Path = '/client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFilteredClients1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFilteredClients1$Response(params: {
    specification: ClientSpecification;
    pageable: Pageable;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PageClientResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ClientControllerService.GetFilteredClients1Path, 'get');
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
        return r as StrictHttpResponse<PageClientResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getFilteredClients1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFilteredClients1(params: {
    specification: ClientSpecification;
    pageable: Pageable;
    context?: HttpContext
  }
): Observable<PageClientResponse> {

    return this.getFilteredClients1$Response(params).pipe(
      map((r: StrictHttpResponse<PageClientResponse>) => r.body as PageClientResponse)
    );
  }

}
