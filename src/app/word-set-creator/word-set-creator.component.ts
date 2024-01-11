import { Component, OnInit, inject } from '@angular/core';
import {
	AbstractControl,
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ApiWordsetsPost$Params } from 'src/generated/fn/wordsets/api-wordsets-post';
import { Languages, Wordset } from 'src/generated/models';
import { WordsetsService } from 'src/generated/services';

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

	languages: Languages[] = Object.values(Languages);

	private fb = inject(FormBuilder);

	private wordsetsService = inject(WordsetsService);

	get words(): FormArray {
		return this.creatorForm.get('words') as FormArray;
	}

	ngOnInit(): void {
		this.creatorForm = this.fb.group({
			name: new FormControl('', Validators.required),
			languageFrom: new FormControl('', Validators.required),
			languageTo: new FormControl('', Validators.required),
			words: new FormArray([], Validators.required),
		});

		for (let i = 0; i < 5; i++) {
			this.addWordsRow();
		}
	}

	addWordsRow(): void {
		const wordsForm = this.fb.group({
			nameFrom: new FormControl('', Validators.required),
			nameTo: new FormControl('', Validators.required),
		});

		this.words.push(wordsForm);
	}

	deleteWordsRow(index: number): void {
		this.words.removeAt(index);
	}

	convertAbstractControlToFormGroup(control: AbstractControl): FormGroup {
		return control as FormGroup;
	}

	save(): void {
		const form = this.creatorForm.getRawValue();
		const body: Wordset = {
			wordsetName: form.name,
			languageFrom: form.languageFrom,
			languageTo: form.languageTo,
			words: form.words,
		};

		const params: ApiWordsetsPost$Params = {
			body: body,
		};

		this.wordsetsService
			.apiWordsetsPost$Response(params)
			.subscribe(response => console.log(response));
	}

	swapLanguages(): void {
		const currentLanguageFrom = this.creatorForm.get('languageFrom')?.value;
		const currentLanguageTo = this.creatorForm.get('languageTo')?.value;

		this.creatorForm.get('languageFrom')?.setValue(currentLanguageTo);
		this.creatorForm.get('languageTo')?.setValue(currentLanguageFrom);
	}
}
