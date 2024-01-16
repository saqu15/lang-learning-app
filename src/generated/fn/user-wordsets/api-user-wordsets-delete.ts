/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiUserWordsetsDelete$Params {

/**
 * The ID of the user for whom the wordset is associated.
 */
  userId: string;

/**
 * The ID of the user-associated wordset to delete.
 */
  userWordsetId: string;
}

export function apiUserWordsetsDelete(http: HttpClient, rootUrl: string, params: ApiUserWordsetsDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * A success message.
 */
'message'?: string;
'request'?: {

/**
 * The HTTP request method (POST).
 */
'type'?: string;

/**
 * The URL to create a new user wordset.
 */
'url'?: string;
'body'?: {

/**
 * The ID of the user.
 */
'userId'?: string;

/**
 * The ID of the deleted wordset.
 */
'wordsetId'?: string;
};
};
}>> {
  const rb = new RequestBuilder(rootUrl, apiUserWordsetsDelete.PATH, 'delete');
  if (params) {
    rb.query('userId', params.userId, {});
    rb.query('userWordsetId', params.userWordsetId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      
      /**
       * A success message.
       */
      'message'?: string;
      'request'?: {
      
      /**
       * The HTTP request method (POST).
       */
      'type'?: string;
      
      /**
       * The URL to create a new user wordset.
       */
      'url'?: string;
      'body'?: {
      
      /**
       * The ID of the user.
       */
      'userId'?: string;
      
      /**
       * The ID of the deleted wordset.
       */
      'wordsetId'?: string;
      };
      };
      }>;
    })
  );
}

apiUserWordsetsDelete.PATH = '/api/user-wordsets';
