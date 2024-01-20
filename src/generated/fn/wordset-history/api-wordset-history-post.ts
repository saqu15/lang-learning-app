/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Wordset } from '../../models/wordset';

export interface ApiWordsetHistoryPost$Params {
      body: {
'wordset': Wordset;

/**
 * Date when the wordset history was finished.
 */
'finishDate': string;

/**
 * Time elapsed while working on the wordset history in seconds.
 */
'timeElapsed': number;

/**
 * Number of fails during working on the wordset history.
 */
'fails'?: number;
}
}

export function apiWordsetHistoryPost(http: HttpClient, rootUrl: string, params: ApiWordsetHistoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * Success message.
 */
'message'?: string;
}>> {
  const rb = new RequestBuilder(rootUrl, apiWordsetHistoryPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      
      /**
       * Success message.
       */
      'message'?: string;
      }>;
    })
  );
}

apiWordsetHistoryPost.PATH = '/api/wordset-history';
