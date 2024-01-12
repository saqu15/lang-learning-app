/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserWordsetsGet } from '../fn/user-wordsets/api-user-wordsets-get';
import { ApiUserWordsetsGet$Params } from '../fn/user-wordsets/api-user-wordsets-get';
import { apiUserWordsetsPost } from '../fn/user-wordsets/api-user-wordsets-post';
import { ApiUserWordsetsPost$Params } from '../fn/user-wordsets/api-user-wordsets-post';
import { Wordset } from '../models/wordset';


/**
 * User wordsets endpoints
 */
@Injectable({ providedIn: 'root' })
export class UserWordsetsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserWordsetsGet()` */
  static readonly ApiUserWordsetsGetPath = '/api/user-wordsets';

  /**
   * Get user-associated wordsets.
   *
   * Retrieves wordsets associated with the user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserWordsetsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserWordsetsGet$Response(params?: ApiUserWordsetsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Wordset>>> {
    return apiUserWordsetsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user-associated wordsets.
   *
   * Retrieves wordsets associated with the user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserWordsetsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserWordsetsGet(params?: ApiUserWordsetsGet$Params, context?: HttpContext): Observable<Array<Wordset>> {
    return this.apiUserWordsetsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Wordset>>): Array<Wordset> => r.body)
    );
  }

  /** Path part for operation `apiUserWordsetsPost()` */
  static readonly ApiUserWordsetsPostPath = '/api/user-wordsets';

  /**
   * Add a word set to a user.
   *
   * Adds a new word set to a user based on the UserWordset model.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserWordsetsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUserWordsetsPost$Response(params: ApiUserWordsetsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return apiUserWordsetsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Add a word set to a user.
   *
   * Adds a new word set to a user based on the UserWordset model.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserWordsetsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUserWordsetsPost(params: ApiUserWordsetsPost$Params, context?: HttpContext): Observable<any> {
    return this.apiUserWordsetsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

}
