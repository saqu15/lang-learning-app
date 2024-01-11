import { Component, OnInit, inject } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Observable, map, tap } from 'rxjs';
import { Wordset } from 'src/generated/models';
import { WordsetsService } from 'src/generated/services';

@Component({
	selector: 'app-browse-sets',
	templateUrl: './browse-sets.component.html',
	styleUrls: ['./browse-sets.component.sass'],
})
export class BrowseSetsComponent implements OnInit {
	private wordsetsService = inject(WordsetsService);

	wordsets$!: Observable<Wordset[]>;

	displayedWordsets: Wordset[] = [];

	length!: number;

	ngOnInit(): void {
		this.wordsets$ = this.getWordsets$().pipe(
			tap(wordsets => {
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
		return this.wordsetsService.apiWordsetsGet().pipe(
			tap(wordset => (this.length = wordset.count ?? 0)),
			map(wordset => wordset.wordsets as Wordset[])
		);
	}

	first = 0;

	rows = 5;

	onPageChange(event: PaginatorState, wordsets: Wordset[]) {
		this.first = Number(event.first);
		this.rows = Number(event.rows);

		console.log(this.first, this.rows, event.page, event.pageCount);
		this.displayedWordsets = wordsets.slice(
			this.first,
			this.rows * (Number(event.page) + 1)
		);

		console.log(
			'uciete od',
			this.first,
			'do',
			this.rows * (Number(event.page) + 1),
			this.displayedWordsets
		);
	}
}
