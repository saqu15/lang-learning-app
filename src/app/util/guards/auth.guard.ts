import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {
	const router = inject(Router);
	const userService = inject(UserService);

	return userService.isLoggedIn$().pipe(
		tap(isLoggedIn => {
			if (!isLoggedIn) {
				router.navigate(['/login']);
			}
		})
	);
};
