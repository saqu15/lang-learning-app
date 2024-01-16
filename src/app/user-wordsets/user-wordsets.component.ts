import { Component, inject } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Observable, map, tap } from 'rxjs';
import { ApiUserWordsetsDelete$Params } from 'src/generated/fn/user-wordsets/api-user-wordsets-delete';
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
		this.getWordsets();
	}

	private getWordsets(): void {
		this.wordsets$ = this.getWordsets$().pipe(
			tap(wordsets => {
				console.log(wordsets);
				this.onPageChange(
					{
						first: this.first,
						rows: this.rows,
						page: this.page,
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

	page = 0;

	onPageChange(event: PaginatorState, wordsets: Wordset[]) {
		this.first = Number(event.first);
		this.rows = Number(event.rows);
		this.page = Number(event.page);

		this.displayedWordsets = wordsets.slice(
			this.first,
			this.rows * (Number(event.page) + 1)
		);
	}

	deleteWordset(wordset: Wordset): void {
		this.deleteUserWordset(wordset)
			.pipe(
				tap(() => {
					this.getWordsets();
				})
			)
			.subscribe();
	}

	private deleteUserWordset(wordset: Wordset): Observable<any> {
		const params: ApiUserWordsetsDelete$Params = {
			userId: wordset.ownerId ?? '',
			userWordsetId: wordset.id ?? '',
		};

		return this.userWordsetsService.apiUserWordsetsDelete(params);
	}
}
