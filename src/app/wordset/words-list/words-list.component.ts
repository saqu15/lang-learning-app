import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';
import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
	inject,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subject, debounceTime, interval, takeUntil, tap } from 'rxjs';
import { Word, Wordset } from 'src/generated/models';

@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-words-list',
	templateUrl: './words-list.component.html',
	styleUrls: ['./words-list.component.sass'],
	animations: [
		trigger('answerState', [
			state(
				'correct',
				style({
					border: '1px solid green',
				})
			),
			state(
				'initial',
				style({
					border: '1px solid #ced4da',
				})
			),
			state(
				'incorrect',
				style({
					border: '1px solid red',
				})
			),
			transition('initial => correct', animate('0.3s')),
			transition('incorrect => correct', animate('0.3s')),
			transition('initial => incorrect', animate('0.3s')),
		]),
		trigger('iconState', [
			state(
				'hidden',
				style({
					opacity: 0,
					transform: 'scale(0)',
				})
			),
			state(
				'visible',
				style({
					opacity: 1,
					transform: 'scale(1)',
				})
			),
			transition('hidden => visible', animate('0.6s ease-out')),
		]),
	],
})
export class WordsListComponent implements OnInit, OnDestroy {
	@Output() returnToMenu = new EventEmitter<void>();

	@Input() isTest!: boolean;

	@Input() wordset!: Wordset;

	private fb = inject(FormBuilder);

	private destroy$ = new Subject<void>();

	elapsedTime = 1;

	wrongAnswers = 0;

	form!: FormGroup;

	testFinished = false;

	answerStates: string[] = [];

	iconStates: string[] = [];

	ngOnInit(): void {
		interval(1000)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => this.elapsedTime++);

		this.form = this.fb.group({
			answers: new FormArray(
				this.convertToWordList(this.wordset).map(
					() => new FormControl('')
				)
			),
		});

		this.answers.controls.forEach((val, index) => {
			this.answerStates[index] = 'initial';
			this.iconStates[index] = 'hidden';
		});
	}

	get answers(): FormArray {
		return this.form.get('answers') as FormArray;
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	closeTest(): void {
		this.returnToMenu.emit();
	}

	convertToWordList(wordset: Wordset): Word[] {
		return wordset.words as Word[];
	}

	checkAnswer(index: number): void {
		const userAnswer = this.answers.at(index).value;
		const correctAnswer = this.convertToWordList(this.wordset)[index]
			.nameTo;

		if (userAnswer.toLowerCase() === correctAnswer?.toLowerCase()) {
			this.answers.at(index).disable();
		}

		this.answerStates[index] = this.getAnswerState(index);
		this.iconStates[index] = this.getIconState(index);
		this.areAllAnswersDisabled();
	}

	private getAnswerState(index: number): string {
		const userAnswer = this.answers.at(index).value;
		const correctAnswer = this.convertToWordList(this.wordset)[index]
			.nameTo;

		if (userAnswer.toLowerCase() === correctAnswer?.toLowerCase()) {
			return 'correct';
		}

		this.wrongAnswers++;
		return 'incorrect';
	}

	private getIconState(index: number): string {
		const userAnswer = this.answers.at(index).value;
		const correctAnswer = this.convertToWordList(this.wordset)[index]
			.nameTo;
		return userAnswer.toLowerCase() === correctAnswer?.toLowerCase()
			? 'visible'
			: 'hidden';
	}

	areAllAnswersDisabled(): void {
		const allAnswersDisabled = this.answers.controls.every(
			control => control.disabled
		);

		if (allAnswersDisabled) {
			this.destroy$.next();
			this.testFinished = true;
		}
	}
}
