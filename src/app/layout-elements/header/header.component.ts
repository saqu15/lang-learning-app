import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/util/services/user.service';
import { User } from 'src/generated/models';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
	items: MenuItem[] | undefined;

	user$!: Observable<User>;

	private userService = inject(UserService);

	private router = inject(Router);

	ngOnInit() {
		this.items = [
			{
				label: 'User wordsets',
				icon: 'pi pi-external-link',
				routerLink: '/user-wordsets',
			},
			{
				label: 'Logout',
				icon: 'pi pi-external-link',
				command: () => {
					this.logout();
				},
			},
		];

		this.user$ = this.userService.userInfo$();
	}

	private logout(): void {
		this.userService.logout();
		this.router.navigate(['/login']);
	}
}
