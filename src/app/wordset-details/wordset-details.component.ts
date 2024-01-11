import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ApiWordsetsWordsetIdGet$Params } from 'src/generated/fn/wordsets/api-wordsets-wordset-id-get';
import { Wordset } from 'src/generated/models';
import { WordsetsService } from 'src/generated/services';

@Component({
	selector: 'app-wordset-details',
	templateUrl: './wordset-details.component.html',
	styleUrls: ['./wordset-details.component.sass'],
})
export class WordsetDetailsComponent implements OnInit {
	wordset$!: Observable<Wordset>;

	private wordsetService = inject(WordsetsService);

	private route = inject(ActivatedRoute);

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.wordset$ = this.getWordset$(params.get('id') ?? '').pipe(
				map(wordset => (wordset as any).wordset)
			);
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
}
