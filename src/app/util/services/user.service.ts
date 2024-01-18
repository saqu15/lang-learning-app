import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/generated/models';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

	private userInfo = new BehaviorSubject<User>({});

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

	setUserInfo(user: User): void {
		this.userInfo.next(user);
	}

	userInfo$(): Observable<User> {
		return this.userInfo.asObservable();
	}

	isLoggedOut(): boolean {
		return !this.isLoggedIn();
	}

	getToken(): string | null {
		return localStorage.getItem('token');
	}

	getUserId(): string {
		return this.userInfo.getValue().id ?? '';
	}

	isTokenExpired(): boolean {
		if (this.tokenExpired(this.getToken() ?? '')) {
			return true;
		}
		return false;
	}

	private tokenExpired(token: string) {
		const expiry = JSON.parse(atob(token.split('.')[1])).exp;
		return Math.floor(new Date().getTime() / 1000) >= expiry;
	}
}
