import { Component, OnInit, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PaginatorState } from 'primeng/paginator';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { ApiUserWordsetsPost$Params } from 'src/generated/fn/user-wordsets/api-user-wordsets-post';
import { UserWordset, Wordset } from 'src/generated/models';
import { UserWordsetsService, WordsetsService } from 'src/generated/services';

@Component({
	selector: 'app-browse-sets',
	templateUrl: './browse-sets.component.html',
	styleUrls: ['./browse-sets.component.sass'],
	providers: [MessageService],
})
export class BrowseSetsComponent implements OnInit {
	private wordsetsService = inject(WordsetsService);

	private userWordsetsService = inject(UserWordsetsService);

	private messageService = inject(MessageService);

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
						page: this.page,
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

	page = 0;

	onPageChange(event: PaginatorState, wordsets: Wordset[]) {
		this.first = Number(event.first);
		this.rows = Number(event.rows);
		this.page = Number(event.page);

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

	addWordsetToUser(wordsetId: string | undefined): void {
		this.addWordsetToUser$(wordsetId ?? '')
			.pipe(
				catchError(error => {
					const err = new Error(error.error.message);
					this.showToast('error', 'Error', err.message);
					return throwError(() => err.message);
				})
			)
			.subscribe();
	}

	addWordsetToUser$(wordsetId: string): Observable<void> {
		const params: ApiUserWordsetsPost$Params = {
			body: { wordsetId } as UserWordset,
		};

		return this.userWordsetsService.apiUserWordsetsPost(params);
	}

	private showToast(severity: string, title: string, text: string): void {
		this.messageService.add({
			severity: severity,
			summary: title,
			detail: text,
		});
	}
}
