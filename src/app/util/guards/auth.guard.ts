import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
	const router = inject(Router);
	const test = false;

	if (test) {
		router.navigate(['/login']);
		return false;
	}

	return true;
};
