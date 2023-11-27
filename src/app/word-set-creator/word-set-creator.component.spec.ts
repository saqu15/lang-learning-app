import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSetCreatorComponent } from './word-set-creator.component';

describe('WordSetCreatorComponent', () => {
	let component: WordSetCreatorComponent;
	let fixture: ComponentFixture<WordSetCreatorComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [WordSetCreatorComponent],
		});
		fixture = TestBed.createComponent(WordSetCreatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
