import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardListComponent } from './flashcard-list.component';

describe('FlashcardListComponent', () => {
	let component: FlashcardListComponent;
	let fixture: ComponentFixture<FlashcardListComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FlashcardListComponent],
		});
		fixture = TestBed.createComponent(FlashcardListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
