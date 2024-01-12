/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserWordset } from '../../models/user-wordset';

export interface ApiUserWordsetsPost$Params {
  
    /**
     * The UserWordset model to be passed in the request body.
     */
    body: UserWordset
}

export function apiUserWordsetsPost(http: HttpClient, rootUrl: string, params: ApiUserWordsetsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, apiUserWordsetsPost.PATH, 'post');
  if (params) {
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

apiUserWordsetsPost.PATH = '/api/user-wordsets';
