/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserLoginPost } from '../fn/users/api-user-login-post';
import { ApiUserLoginPost$Params } from '../fn/users/api-user-login-post';
import { apiUserSignupPost } from '../fn/users/api-user-signup-post';
import { ApiUserSignupPost$Params } from '../fn/users/api-user-signup-post';
import { apiUserUserIdDelete } from '../fn/users/api-user-user-id-delete';
import { ApiUserUserIdDelete$Params } from '../fn/users/api-user-user-id-delete';
import { apiUserUserIdGet } from '../fn/users/api-user-user-id-get';
import { ApiUserUserIdGet$Params } from '../fn/users/api-user-user-id-get';
import { User } from '../models/user';


/**
 * User endpoints
 */
@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserSignupPost()` */
  static readonly ApiUserSignupPostPath = '/api/user/signup';

  /**
   * Register a new user.
   *
   * Endpoint for registering a new user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserSignupPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUserSignupPost$Response(params: ApiUserSignupPost$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return apiUserSignupPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Register a new user.
   *
   * Endpoint for registering a new user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserSignupPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUserSignupPost(params: ApiUserSignupPost$Params, context?: HttpContext): Observable<any> {
    return this.apiUserSignupPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `apiUserLoginPost()` */
  static readonly ApiUserLoginPostPath = '/api/user/login';

  /**
   * Authenticate user.
   *
   * Endpoint for authenticating a user based on login credentials.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLoginPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUserLoginPost$Response(params: ApiUserLoginPost$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return apiUserLoginPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Authenticate user.
   *
   * Endpoint for authenticating a user based on login credentials.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserLoginPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUserLoginPost(params: ApiUserLoginPost$Params, context?: HttpContext): Observable<any> {
    return this.apiUserLoginPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `apiUserUserIdGet()` */
  static readonly ApiUserUserIdGetPath = '/api/user/{userId}';

  /**
   * Get user by ID.
   *
   * Retrieve user details by their user ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdGet$Response(params: ApiUserUserIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUserUserIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user by ID.
   *
   * Retrieve user details by their user ID.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdGet(params: ApiUserUserIdGet$Params, context?: HttpContext): Observable<User> {
    return this.apiUserUserIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `apiUserUserIdDelete()` */
  static readonly ApiUserUserIdDeletePath = '/api/user/{userId}';

  /**
   * Delete a user.
   *
   * Endpoint for deleting a user by their user ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUserIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdDelete$Response(params: ApiUserUserIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return apiUserUserIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a user.
   *
   * Endpoint for deleting a user by their user ID.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUserIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdDelete(params: ApiUserUserIdDelete$Params, context?: HttpContext): Observable<any> {
    return this.apiUserUserIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

}
