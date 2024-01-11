/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Wordset } from '../../models/wordset';

export interface ApiWordsetsGet$Params {
}

export function apiWordsetsGet(http: HttpClient, rootUrl: string, params?: ApiWordsetsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * Number of wordsets.
 */
'count'?: number;
'wordsets'?: Array<Wordset>;
}>> {
  const rb = new RequestBuilder(rootUrl, apiWordsetsGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      
      /**
       * Number of wordsets.
       */
      'count'?: number;
      'wordsets'?: Array<Wordset>;
      }>;
    })
  );
}

apiWordsetsGet.PATH = '/api/wordsets';
