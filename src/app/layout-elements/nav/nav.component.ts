import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {
	items: MenuItem[] | undefined;

	ngOnInit() {
		this.items = [
			{
				label: 'Wordsets',
				items: [
					{
						label: 'Router',
						icon: 'pi pi-upload',
						routerLink: '/test',
					},
					{
						label: 'Create new set',
						icon: 'pi pi-upload',
						routerLink: '/create-set',
					},
					{
						label: 'Browse wordsets',
						icon: 'pi pi-upload',
						routerLink: '/browse-sets',
					},
				],
			},
		];
	}
}
