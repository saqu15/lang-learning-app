import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
			wordFrom: new FormControl(''),
			wordTo: new FormControl(''),
		});

		this.words.push(wordsForm);
	}

	deleteWordsRow(index: number): void {
		this.words.removeAt(index);
	}

	test(): void {
		console.log(this.creatorForm.getRawValue());
	}

	convertAbstractControlToFormGroup(control: AbstractControl): FormGroup {
		return control as FormGroup;
	}
}
