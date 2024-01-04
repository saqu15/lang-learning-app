import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

	login(token: string): void {
		localStorage.setItem('token', token);
		this.updateLoginStatus(this.isLoggedIn());
	}

	logout(): void {
		localStorage.removeItem('token');
		this.updateLoginStatus(this.isLoggedIn());
	}

	isLoggedIn$(): Observable<boolean> {
		return this.isLoggedInSubject.asObservable();
	}

	private isLoggedIn(): boolean {
		return this.getToken() !== null;
	}

	updateLoginStatus(isLoggedIn: boolean): void {
		this.isLoggedInSubject.next(isLoggedIn);
	}

	isLoggedOut(): boolean {
		return !this.isLoggedIn();
	}

	getToken(): string | null {
		return localStorage.getItem('token');
	}
}
