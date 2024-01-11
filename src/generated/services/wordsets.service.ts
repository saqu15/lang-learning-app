/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiWordsetsGet } from '../fn/wordsets/api-wordsets-get';
import { ApiWordsetsGet$Params } from '../fn/wordsets/api-wordsets-get';
import { apiWordsetsPost } from '../fn/wordsets/api-wordsets-post';
import { ApiWordsetsPost$Params } from '../fn/wordsets/api-wordsets-post';
import { apiWordsetsWordsetIdDelete } from '../fn/wordsets/api-wordsets-wordset-id-delete';
import { ApiWordsetsWordsetIdDelete$Params } from '../fn/wordsets/api-wordsets-wordset-id-delete';
import { apiWordsetsWordsetIdGet } from '../fn/wordsets/api-wordsets-wordset-id-get';
import { ApiWordsetsWordsetIdGet$Params } from '../fn/wordsets/api-wordsets-wordset-id-get';


/**
 * Wordsets section
 */
@Injectable({ providedIn: 'root' })
export class WordsetsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiWordsetsGet()` */
  static readonly ApiWordsetsGetPath = '/api/wordsets';

  /**
   * Get all wordsets.
   *
   * Retrieve all wordsets from the database.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWordsetsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsetsGet$Response(params?: ApiWordsetsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return apiWordsetsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all wordsets.
   *
   * Retrieve all wordsets from the database.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWordsetsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsetsGet(params?: ApiWordsetsGet$Params, context?: HttpContext): Observable<any> {
    return this.apiWordsetsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `apiWordsetsPost()` */
  static readonly ApiWordsetsPostPath = '/api/wordsets';

  /**
   * Create a new wordset.
   *
   * Endpoint to create a new wordset.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWordsetsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiWordsetsPost$Response(params: ApiWordsetsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return apiWordsetsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new wordset.
   *
   * Endpoint to create a new wordset.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWordsetsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiWordsetsPost(params: ApiWordsetsPost$Params, context?: HttpContext): Observable<any> {
    return this.apiWordsetsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `apiWordsetsWordsetIdGet()` */
  static readonly ApiWordsetsWordsetIdGetPath = '/api/wordsets/{wordsetId}';

  /**
   * Get a wordset by ID.
   *
   * Endpoint to retrieve a wordset by its ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWordsetsWordsetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsetsWordsetIdGet$Response(params: ApiWordsetsWordsetIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return apiWordsetsWordsetIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a wordset by ID.
   *
   * Endpoint to retrieve a wordset by its ID.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWordsetsWordsetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsetsWordsetIdGet(params: ApiWordsetsWordsetIdGet$Params, context?: HttpContext): Observable<any> {
    return this.apiWordsetsWordsetIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `apiWordsetsWordsetIdDelete()` */
  static readonly ApiWordsetsWordsetIdDeletePath = '/api/wordsets/{wordsetId}';

  /**
   * Delete a wordset by ID.
   *
   * Endpoint to delete a wordset by its ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWordsetsWordsetIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsetsWordsetIdDelete$Response(params: ApiWordsetsWordsetIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return apiWordsetsWordsetIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a wordset by ID.
   *
   * Endpoint to delete a wordset by its ID.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWordsetsWordsetIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsetsWordsetIdDelete(params: ApiWordsetsWordsetIdDelete$Params, context?: HttpContext): Observable<any> {
    return this.apiWordsetsWordsetIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

}
