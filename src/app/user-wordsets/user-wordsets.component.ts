import { Component, inject } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Observable, map, tap } from 'rxjs';
import { Wordset } from 'src/generated/models';
import { UserWordsetsService } from 'src/generated/services';

@Component({
	selector: 'app-user-wordsets',
	templateUrl: './user-wordsets.component.html',
	styleUrls: ['./user-wordsets.component.sass'],
})
export class UserWordsetsComponent {
	private userWordsetsService = inject(UserWordsetsService);

	wordsets$!: Observable<Wordset[]>;

	displayedWordsets: Wordset[] = [];

	length!: number;

	ngOnInit(): void {
		this.wordsets$ = this.getWordsets$().pipe(
			tap(wordsets => {
				console.log(wordsets);
				this.onPageChange(
					{
						first: this.first,
						rows: this.rows,
						page: 0,
					} as PaginatorState,
					wordsets
				);
			})
		);
	}

	private getWordsets$(): Observable<Wordset[]> {
		return this.userWordsetsService.apiUserWordsetsGet().pipe(
			map(wordset => (wordset as any).wordset),
			tap(wordset => (this.length = wordset.length ?? 0))
		);
	}

	first = 0;

	rows = 5;

	onPageChange(event: PaginatorState, wordsets: Wordset[]) {
		this.first = Number(event.first);
		this.rows = Number(event.rows);

		this.displayedWordsets = wordsets.slice(
			this.first,
			this.rows * (Number(event.page) + 1)
		);
	}
}
