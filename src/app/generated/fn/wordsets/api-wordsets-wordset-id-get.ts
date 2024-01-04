/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiWordsetsWordsetIdGet$Params {

/**
 * The ID of the wordset to retrieve.
 */
  wordsetId: string;
}

export function apiWordsetsWordsetIdGet(http: HttpClient, rootUrl: string, params: ApiWordsetsWordsetIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, apiWordsetsWordsetIdGet.PATH, 'get');
  if (params) {
    rb.path('wordsetId', params.wordsetId, {});
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

apiWordsetsWordsetIdGet.PATH = '/api/wordsets/{wordsetId}';
