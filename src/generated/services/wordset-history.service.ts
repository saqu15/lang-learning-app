/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiWordsetHistoryPost } from '../fn/wordset-history/api-wordset-history-post';
import { ApiWordsetHistoryPost$Params } from '../fn/wordset-history/api-wordset-history-post';
import { apiWordsetHistoryWordsetIdGet } from '../fn/wordset-history/api-wordset-history-wordset-id-get';
import { ApiWordsetHistoryWordsetIdGet$Params } from '../fn/wordset-history/api-wordset-history-wordset-id-get';
import { WordsetHistory } from '../models/wordset-history';


/**
 * History of wordsets completed by user
 */
@Injectable({ providedIn: 'root' })
export class WordsetHistoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiWordsetHistoryPost()` */
  static readonly ApiWordsetHistoryPostPath = '/api/wordset-history';

  /**
   * Create a new wordset history entry.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWordsetHistoryPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiWordsetHistoryPost$Response(params: ApiWordsetHistoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * Success message.
 */
'message'?: string;
}>> {
    return apiWordsetHistoryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new wordset history entry.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWordsetHistoryPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiWordsetHistoryPost(params: ApiWordsetHistoryPost$Params, context?: HttpContext): Observable<{

/**
 * Success message.
 */
'message'?: string;
}> {
    return this.apiWordsetHistoryPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Success message.
 */
'message'?: string;
}>): {

/**
 * Success message.
 */
'message'?: string;
} => r.body)
    );
  }

  /** Path part for operation `apiWordsetHistoryWordsetIdGet()` */
  static readonly ApiWordsetHistoryWordsetIdGetPath = '/api/wordset-history/{wordsetId}';

  /**
   * Get Wordset History for a specific user and wordset.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWordsetHistoryWordsetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsetHistoryWordsetIdGet$Response(params: ApiWordsetHistoryWordsetIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WordsetHistory>>> {
    return apiWordsetHistoryWordsetIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Wordset History for a specific user and wordset.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWordsetHistoryWordsetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsetHistoryWordsetIdGet(params: ApiWordsetHistoryWordsetIdGet$Params, context?: HttpContext): Observable<Array<WordsetHistory>> {
    return this.apiWordsetHistoryWordsetIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<WordsetHistory>>): Array<WordsetHistory> => r.body)
    );
  }

}
