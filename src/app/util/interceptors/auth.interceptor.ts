import { Injectable, inject } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	private userService = inject(UserService);

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const token = this.userService.getToken();

		if (token) {
			const cloned = request.clone({
				headers: request.headers.set(
					'Authorization',
					'Bearer ' + token
				),
			});

			return next.handle(cloned);
		} else {
			return next.handle(request);
		}
	}
}
