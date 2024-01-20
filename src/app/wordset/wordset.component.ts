import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map, tap } from 'rxjs';
import { ApiWordsetHistoryWordsetIdGet$Params } from 'src/generated/fn/wordset-history/api-wordset-history-wordset-id-get';
import { ApiWordsetsWordsetIdGet$Params } from 'src/generated/fn/wordsets/api-wordsets-wordset-id-get';
import { Wordset, WordsetHistory } from 'src/generated/models';
import { WordsetHistoryService, WordsetsService } from 'src/generated/services';

@Component({
	selector: 'app-wordset',
	templateUrl: './wordset.component.html',
	styleUrls: ['./wordset.component.sass'],
})
export class WordsetComponent implements OnInit, OnDestroy {
	displayWordsList = false;

	isTest = false;

	id!: string;

	wordset$!: Observable<Wordset>;

	wordsetHistory$!: Observable<WordsetHistory[]>;

	subscriptions: Subscription[] = [];

	private route = inject(ActivatedRoute);

	private router = inject(Router);

	private wordsetService = inject(WordsetsService);

	private wordsetHistoryService = inject(WordsetHistoryService);

	ngOnInit(): void {
		const routeParams = this.route.paramMap.subscribe(params => {
			this.id = params.get('id') ?? '';
			this.getWordset(this.id);
			this.getUserWordsetHistory(this.id);
		});

		this.subscriptions.push(routeParams);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	startTest(): void {
		this.displayWordsList = true;
		this.isTest = true;
	}

	startLearning(): void {
		this.displayWordsList = true;
		this.isTest = false;
	}

	returnToMenu(): void {
		this.displayWordsList = false;
	}

	private getWordset$(id: string): Observable<Wordset> {
		const params: ApiWordsetsWordsetIdGet$Params = {
			wordsetId: id,
		};

		return this.wordsetService.apiWordsetsWordsetIdGet(params);
	}

	private getWordset(id: string): void {
		this.wordset$ = this.getWordset$(id).pipe(
			map(wordset => {
				console.log(wordset);
				return (wordset as any).wordsets;
			}),
			tap(console.log)
		);
	}

	returnToUserWordsets(): void {
		this.router.navigate(['/user-wordsets']);
	}

	switchLanguages(wordset: Wordset): void {
		if (Array.isArray(wordset.words)) {
			wordset.words.forEach(word => {
				[word.nameFrom, word.nameTo] = [word.nameTo, word.nameFrom];
			});
		}

		[wordset.languageFrom, wordset.languageTo] = [
			wordset.languageTo,
			wordset.languageFrom,
		];
	}

	getUserWordsetHistory(id: string): void {
		this.wordsetHistory$ = this.getUserWordsetHistory$(id);
	}

	private getUserWordsetHistory$(id: string): Observable<WordsetHistory[]> {
		const params: ApiWordsetHistoryWordsetIdGet$Params = {
			wordsetId: id,
		};

		return this.wordsetHistoryService.apiWordsetHistoryWordsetIdGet(params);
	}
}
