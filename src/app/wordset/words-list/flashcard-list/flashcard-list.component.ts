import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wordset } from 'src/generated/models';

@Component({
	selector: 'app-flashcard-list',
	templateUrl: './flashcard-list.component.html',
	styleUrls: ['./flashcard-list.component.sass'],
})
export class FlashcardListComponent {
	@Output() returnToMenu = new EventEmitter<void>();

	@Input() wordset!: Wordset;

	closeLearning(): void {
		this.returnToMenu.emit();
	}
}
