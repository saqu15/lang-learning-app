import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
	items: MenuItem[] | undefined;

	ngOnInit() {
		this.items = [
			{
				label: 'Options',
				items: [
					{
						label: 'Update',
						icon: 'pi pi-refresh',
					},
					{
						label: 'Delete',
						icon: 'pi pi-times',
					},
				],
			},
			{
				label: 'Navigate',
				items: [
					{
						label: 'Angular',
						icon: 'pi pi-external-link',
						url: 'http://angular.io',
					},
					{
						label: 'Router',
						icon: 'pi pi-upload',
						routerLink: '/test',
					},
				],
			},
		];
	}
}
