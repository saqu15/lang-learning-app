import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-words-list-results',
	templateUrl: './words-list-results.component.html',
	styleUrls: ['./words-list-results.component.sass'],
})
export class WordsListResultsComponent {
	@Input() time!: number;

	@Input() wrongAnswers!: number;
}
