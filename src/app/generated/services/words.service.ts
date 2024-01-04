/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiWordsGet } from '../fn/words/api-words-get';
import { ApiWordsGet$Params } from '../fn/words/api-words-get';
import { apiWordsIdGet } from '../fn/words/api-words-id-get';
import { ApiWordsIdGet$Params } from '../fn/words/api-words-id-get';
import { Word } from '../models/word';


/**
 * Words section
 */
@Injectable({ providedIn: 'root' })
export class WordsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiWordsGet()` */
  static readonly ApiWordsGetPath = '/api/words';

  /**
   * Pobierz listę wszystkich słów.
   *
   * Endpoint służy do pobierania listy wszystkich dostępnych słów.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWordsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsGet$Response(params?: ApiWordsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Word>>> {
    return apiWordsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Pobierz listę wszystkich słów.
   *
   * Endpoint służy do pobierania listy wszystkich dostępnych słów.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWordsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsGet(params?: ApiWordsGet$Params, context?: HttpContext): Observable<Array<Word>> {
    return this.apiWordsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Word>>): Array<Word> => r.body)
    );
  }

  /** Path part for operation `apiWordsIdGet()` */
  static readonly ApiWordsIdGetPath = '/api/words/{id}';

  /**
   * Get the word by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWordsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsIdGet$Response(params: ApiWordsIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiWordsIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get the word by id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWordsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWordsIdGet(params: ApiWordsIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiWordsIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
