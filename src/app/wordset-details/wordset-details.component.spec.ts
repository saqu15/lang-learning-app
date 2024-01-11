import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsetDetailsComponent } from './wordset-details.component';

describe('WordsetDetailsComponent', () => {
	let component: WordsetDetailsComponent;
	let fixture: ComponentFixture<WordsetDetailsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [WordsetDetailsComponent],
		});
		fixture = TestBed.createComponent(WordsetDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
