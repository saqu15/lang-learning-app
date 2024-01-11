import { Component, OnInit, inject } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { UserService } from '../util/services/user.service';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/generated/services';
import { ApiUserLoginPost$Params } from 'src/generated/fn/users/api-user-login-post';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;

	private fb = inject(FormBuilder);

	private usersService = inject(UsersService);

	private userService = inject(UserService);

	private router = inject(Router);

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			login: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
		});
	}

	private login$(params: ApiUserLoginPost$Params): Observable<any> {
		return this.usersService.apiUserLoginPost(params).pipe(
			tap(user => {
				this.userService.login(user.token);
				this.router.navigate(['/']);
			})
		);
	}

	login(): void {
		const formData = this.loginForm.getRawValue();

		const params: ApiUserLoginPost$Params = {
			body: {
				email: formData.login,
				password: formData.password,
			},
		};

		this.login$(params).subscribe();
	}
}
