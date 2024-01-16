import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWordsetsComponent } from './user-wordsets.component';

describe('UserWordsetsComponent', () => {
	let component: UserWordsetsComponent;
	let fixture: ComponentFixture<UserWordsetsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [UserWordsetsComponent],
		});
		fixture = TestBed.createComponent(UserWordsetsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
