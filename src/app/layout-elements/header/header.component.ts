import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UserService } from 'src/app/util/services/user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
	items: MenuItem[] | undefined;

	private userService = inject(UserService);

	private router = inject(Router);

	ngOnInit() {
		this.items = [
			{
				label: 'Logout',
				icon: 'pi pi-external-link',
				command: () => {
					this.logout();
				},
			},
		];
	}

	private logout(): void {
		this.userService.logout();
		this.router.navigate(['/login']);
	}
}
