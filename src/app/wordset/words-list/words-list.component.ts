import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';
import { Wordset } from 'src/generated/models';

@Component({
	selector: 'app-words-list',
	templateUrl: './words-list.component.html',
	styleUrls: ['./words-list.component.sass'],
})
export class WordsListComponent implements OnInit, OnDestroy {
	@Output() returnToMenu = new EventEmitter<void>();

	@Input() isTest!: boolean;

	@Input() wordset!: Wordset;

	private destroy$ = new Subject<void>();

	elapsedTime = 1;

	ngOnInit(): void {
		interval(1000)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => this.elapsedTime++);
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	closeTest(): void {
		this.returnToMenu.emit();
	}
}
