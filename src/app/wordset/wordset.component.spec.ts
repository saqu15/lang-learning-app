import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsetComponent } from './wordset.component';

describe('WordsetComponent', () => {
	let component: WordsetComponent;
	let fixture: ComponentFixture<WordsetComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [WordsetComponent],
		});
		fixture = TestBed.createComponent(WordsetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
