import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { map } from 'rxjs';

export const LoginGuard: CanActivateFn = (route, state) => {
	const userService = inject(UserService);

	return userService.isLoggedIn$().pipe(map(isLoggedIn => !isLoggedIn));
};
