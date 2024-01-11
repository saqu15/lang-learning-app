/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiWordsetsWordsetIdDelete$Params {

/**
 * The ID of the wordset to delete.
 */
  wordsetId: string;
}

export function apiWordsetsWordsetIdDelete(http: HttpClient, rootUrl: string, params: ApiWordsetsWordsetIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, apiWordsetsWordsetIdDelete.PATH, 'delete');
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

apiWordsetsWordsetIdDelete.PATH = '/api/wordsets/{wordsetId}';
