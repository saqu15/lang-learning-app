/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WordsetHistory } from '../../models/wordset-history';

export interface ApiWordsetHistoryWordsetIdGet$Params {

/**
 * ID of the wordset to retrieve history for
 */
  wordsetId: string;
}

export function apiWordsetHistoryWordsetIdGet(http: HttpClient, rootUrl: string, params: ApiWordsetHistoryWordsetIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WordsetHistory>>> {
  const rb = new RequestBuilder(rootUrl, apiWordsetHistoryWordsetIdGet.PATH, 'get');
  if (params) {
    rb.path('wordsetId', params.wordsetId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<WordsetHistory>>;
    })
  );
}

apiWordsetHistoryWordsetIdGet.PATH = '/api/wordset-history/{wordsetId}';
