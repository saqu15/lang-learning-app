/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Wordset } from '../../models/wordset';

export interface ApiUserWordsetsGet$Params {
}

export function apiUserWordsetsGet(http: HttpClient, rootUrl: string, params?: ApiUserWordsetsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Wordset>>> {
  const rb = new RequestBuilder(rootUrl, apiUserWordsetsGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Wordset>>;
    })
  );
}

apiUserWordsetsGet.PATH = '/api/user-wordsets';
