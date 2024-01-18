import { Component, OnInit, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from './util/services/user.service';
import { Observable, tap } from 'rxjs';
import { UsersService } from 'src/generated/services';
import { User } from 'src/generated/models';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	providers: [MessageService],
})
export class AppComponent implements OnInit {
	authorized$!: Observable<boolean>;

	user$!: Observable<User>;

	private userService = inject(UserService);

	private usersService = inject(UsersService);

	private router = inject(Router);

	ngOnInit(): void {
		this.authorized$ = this.userService.isLoggedIn$();
		this.isTokenExpired();
		this.getUserInfo();
	}

	getUserInfo(): void {
		this.getUserInfo$()
			.pipe(tap(user => this.userService.setUserInfo(user)))
			.subscribe();
	}

	private getUserInfo$(): Observable<User> {
		return this.usersService.apiUserGet();
	}

	private isTokenExpired(): void {
		if (this.userService.isTokenExpired()) {
			this.userService.logout();
			this.router.navigate(['/login']);
		}
	}
}
