import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { ApiWordsetsWordsetIdDelete$Params } from 'src/generated/fn/wordsets/api-wordsets-wordset-id-delete';
import { ApiWordsetsWordsetIdGet$Params } from 'src/generated/fn/wordsets/api-wordsets-wordset-id-get';
import { ApiWordsetsWordsetIdPut$Params } from 'src/generated/fn/wordsets/api-wordsets-wordset-id-put';
import { User, UserWordset, Wordset } from 'src/generated/models';
import { UserWordsetsService, WordsetsService } from 'src/generated/services';
import { UserService } from '../util/services/user.service';
import { ApiUserWordsetsPost$Params } from 'src/generated/fn/user-wordsets/api-user-wordsets-post';

@Component({
	selector: 'app-wordset-details',
	templateUrl: './wordset-details.component.html',
	styleUrls: ['./wordset-details.component.sass'],
	providers: [MessageService],
})
export class WordsetDetailsComponent implements OnInit {
	wordset$!: Observable<Wordset>;

	private wordsetService = inject(WordsetsService);

	private route = inject(ActivatedRoute);

	private router = inject(Router);

	private messageService = inject(MessageService);

	private userService = inject(UserService);

	private userWordsetsService = inject(UserWordsetsService);

	user$!: Observable<User>;

	id!: string;

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.id = params.get('id') ?? '';
			this.getWordset(this.id);
		});
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

	deleteWordset(id: string | undefined): void {
		this.deleteWordset$(id ?? '')
			.pipe(
				tap(() => {
					this.router.navigate(['browse-sets']);
				})
			)
			.subscribe();
	}

	private deleteWordset$(id: string): Observable<void> {
		const params: ApiWordsetsWordsetIdDelete$Params = {
			wordsetId: id,
		};

		console.log(params);

		return this.wordsetService.apiWordsetsWordsetIdDelete(params);
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
			map(wordset => (wordset as any).wordset)
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
