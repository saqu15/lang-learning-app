/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiWordsetsWordsetIdPut$Params {

/**
 * The ID of the wordset to update.
 */
  wordsetId: string;
      body: {

/**
 * User ID.
 */
'userId'?: string;

/**
 * The updated name of the wordset.
 */
'wordsetName'?: string;

/**
 * The updated source language of the wordset.
 */
'languageFrom'?: string;

/**
 * The updated target language of the wordset.
 */
'languageTo'?: string;

/**
 * An array of updated words in the wordset.
 */
'words'?: Array<{

/**
 * The updated name in the source language.
 */
'nameFrom'?: string;

/**
 * The updated name in the target language.
 */
'nameTo'?: string;
}>;
}
}

export function apiWordsetsWordsetIdPut(http: HttpClient, rootUrl: string, params: ApiWordsetsWordsetIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, apiWordsetsWordsetIdPut.PATH, 'put');
  if (params) {
    rb.path('wordsetId', params.wordsetId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<any>;
    })
  );
}

apiWordsetsWordsetIdPut.PATH = '/api/wordsets/{wordsetId}';
