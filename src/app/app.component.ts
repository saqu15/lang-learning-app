import { Component, OnInit, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from './util/services/user.service';
import { Observable, tap } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	providers: [MessageService],
})
export class AppComponent implements OnInit {
	authorized$!: Observable<boolean>;

	private userService = inject(UserService);

	ngOnInit(): void {
		this.authorized$ = this.userService
			.isLoggedIn$()
			.pipe(tap(console.log));
	}
}
