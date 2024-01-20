import {
	trigger,
	state,
	style,
	transition,
	animate,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Word } from 'src/generated/models';

@Component({
	selector: 'app-flashcard',
	templateUrl: './flashcard.component.html',
	styleUrls: ['./flashcard.component.sass'],
	animations: [
		trigger('flip', [
			state(
				'default',
				style({
					transform: 'rotateY(0)',
				})
			),
			state(
				'flipped',
				style({
					transform: 'rotateY(180deg)',
				})
			),
			transition('default => flipped', animate('500ms')),
			transition('flipped => default', animate('500ms')),
		]),
	],
})
export class FlashcardComponent {
	@Input() word!: Word;

	flipped = false;

	toggleFlip() {
		this.flipped = !this.flipped;
	}
}
