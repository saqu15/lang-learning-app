import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsListResultsComponent } from './words-list-results.component';

describe('WordsListResultsComponent', () => {
	let component: WordsListResultsComponent;
	let fixture: ComponentFixture<WordsListResultsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [WordsListResultsComponent],
		});
		fixture = TestBed.createComponent(WordsListResultsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
