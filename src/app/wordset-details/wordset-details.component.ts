import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
	Observable,
	Subscription,
	catchError,
	map,
	of,
	switchMap,
	tap,
	throwError,
} from 'rxjs';
import { ApiWordsetsWordsetIdDelete$Params } from 'src/generated/fn/wordsets/api-wordsets-wordset-id-delete';
import { ApiWordsetsWordsetIdGet$Params } from 'src/generated/fn/wordsets/api-wordsets-wordset-id-get';
import { ApiWordsetsWordsetIdPut$Params } from 'src/generated/fn/wordsets/api-wordsets-wordset-id-put';
import { User, UserWordset, Wordset } from 'src/generated/models';
import { UserWordsetsService, WordsetsService } from 'src/generated/services';
import { UserService } from '../util/services/user.service';
import { ApiUserWordsetsPost$Params } from 'src/generated/fn/user-wordsets/api-user-wordsets-post';
import { ApiUserWordsetsDelete$Params } from 'src/generated/fn/user-wordsets/api-user-wordsets-delete';

@Component({
	selector: 'app-wordset-details',
	templateUrl: './wordset-details.component.html',
	styleUrls: ['./wordset-details.component.sass'],
	providers: [MessageService],
})
export class WordsetDetailsComponent implements OnInit, OnDestroy {
	wordset$!: Observable<Wordset>;

	private wordsetService = inject(WordsetsService);

	private route = inject(ActivatedRoute);

	private router = inject(Router);

	private messageService = inject(MessageService);

	private userService = inject(UserService);

	private userWordsetsService = inject(UserWordsetsService);

	user$!: Observable<User>;

	id!: string;

	userSet = false;

	subscriptions: Subscription[] = [];

	wordsetBackup!: Wordset;

	ngOnInit(): void {
		const routeParams = this.route.paramMap.subscribe(params => {
			this.id = params.get('id') ?? '';
			this.getWordset(this.id);
		});

		this.subscriptions.push(routeParams);

		const queryParams = this.route.queryParams.subscribe(params => {
			this.userSet = params['userSet'];
		});

		this.subscriptions.push(queryParams);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	private getWordset$(id: string): Observable<Wordset> {
		const params: ApiWordsetsWordsetIdGet$Params = {
			wordsetId: id,
		};

		return this.wordsetService.apiWordsetsWordsetIdGet(params);
	}

	convertToAnyList(item: any): any[] {
		return item as any[];
	}

	deleteWordset(wordset: Wordset): void {
		if (this.userSet) {
			this.deleteUserWordset(wordset)
				.pipe(
					tap(() => {
						console.log('wtf');
						this.router.navigate(['user-wordsets']);
					})
				)
				.subscribe();
		} else {
			this.deleteWordset$(wordset.id ?? '')
				.pipe(
					tap(() => {
						this.router.navigate(['browse-sets']);
					})
				)
				.subscribe();
		}
	}

	private deleteWordset$(id: string): Observable<void> {
		const params: ApiWordsetsWordsetIdDelete$Params = {
			wordsetId: id,
		};

		console.log(params);

		return this.wordsetService.apiWordsetsWordsetIdDelete(params);
	}

	private deleteUserWordset(wordset: Wordset): Observable<any> {
		const params: ApiUserWordsetsDelete$Params = {
			userId: this.userService.getUserId() ?? '',
			userWordsetId: wordset.id ?? '',
		};

		return this.userWordsetsService.apiUserWordsetsDelete(params);
	}

	updateWordset(wordset: Wordset): void {
		this.updateWordset$(wordset)
			.pipe(
				catchError(error => {
					const err = new Error(error.error.message);
					this.showToast('error', 'Error', err.message);
					return throwError(() => err.message);
				}),
				tap(response => {
					this.showToast(
						'success',
						'Success',
						(response as any).message
					);
					this.getWordset(this.id);
				})
			)
			.subscribe();
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

	private updateWordset$(wordset: Wordset): Observable<void> {
		const params: ApiWordsetsWordsetIdPut$Params = {
			wordsetId: wordset.id ?? '',
			body: {
				userId: wordset.userId,
				wordsetName: wordset.wordsetName,
				languageFrom: wordset.languageFrom,
				languageTo: wordset.languageTo,
				words: wordset.words,
			},
		};

		return this.wordsetService.apiWordsetsWordsetIdPut(params);
	}

	private showToast(severity: string, title: string, text: string): void {
		this.messageService.add({
			severity: severity,
			summary: title,
			detail: text,
		});
	}

	isCurrentUserAuthor(userId: string | undefined): any {
		return this.userService.getUserId() === userId;
	}

	addWordsetToUser(wordsetId: string | undefined): void {
		this.addWordsetToUser$(wordsetId ?? '')
			.pipe(
				catchError(error => {
					const err = new Error(error.error.message);
					this.showToast('error', 'Error', err.message);
					return throwError(() => err.message);
				}),
				tap(() => {
					this.router.navigate(['browse-sets']);
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
}
