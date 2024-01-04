import { Component, OnInit, inject } from '@angular/core';
import {
	AbstractControl,
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
} from '@angular/forms';
import { WordsService, WordsetsService } from '../generated/services';
import { ApiWordsetsPost$Params } from '../generated/fn/wordsets/api-wordsets-post';
import { Wordset } from '../generated/models/wordset';

interface City {
	name: string;
	code: string;
}
@Component({
	selector: 'app-word-set-creator',
	templateUrl: './word-set-creator.component.html',
	styleUrls: ['./word-set-creator.component.sass'],
})
export class WordSetCreatorComponent implements OnInit {
	cities: City[] | undefined;

	selectedCity: City | undefined;

	creatorForm!: FormGroup;

	private fb = inject(FormBuilder);

	private wordsService = inject(WordsService);

	private wordsetsService = inject(WordsetsService);

	get words(): FormArray {
		return this.creatorForm.get('words') as FormArray;
	}

	ngOnInit(): void {
		this.cities = [
			{ name: 'New York', code: 'NY' },
			{ name: 'Rome', code: 'RM' },
			{ name: 'London', code: 'LDN' },
			{ name: 'Istanbul', code: 'IST' },
			{ name: 'Paris', code: 'PRS' },
		];

		this.creatorForm = this.fb.group({
			name: new FormControl(''),
			languageFrom: new FormControl(''),
			languageTo: new FormControl(''),
			words: new FormArray([]),
		});
	}

	addWordsRow(): void {
		const wordsForm = this.fb.group({
			nameFrom: new FormControl(''),
			nameTo: new FormControl(''),
		});

		this.words.push(wordsForm);
	}

	deleteWordsRow(index: number): void {
		this.words.removeAt(index);
	}

	test(): void {
		console.log(this.creatorForm.getRawValue());
	}

	test2(): void {
		this.wordsService.apiWordsGet({}).subscribe(response => {
			console.log(response);
		});
	}

	convertAbstractControlToFormGroup(control: AbstractControl): FormGroup {
		return control as FormGroup;
	}

	save(): void {
		const form = this.creatorForm.getRawValue();
		const body: Wordset = {
			wordsetName: form.name,
			languageFrom: form.languageFrom.name,
			languageTo: form.languageTo.name,
			words: form.words,
		};

		const params: ApiWordsetsPost$Params = {
			body: body,
		};

		this.wordsetsService
			.apiWordsetsPost$Response(params)
			.subscribe(response => console.log(response));
	}
}
