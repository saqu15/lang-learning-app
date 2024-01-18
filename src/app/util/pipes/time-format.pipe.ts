import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
	transform(value: number): string {
		if (value >= 1 && value <= 60) {
			return `00:${this.pad(value)}`;
		} else {
			const hours = Math.floor(value / 60);
			const minutes = value % 60;
			return `${this.pad(hours)}:${this.pad(minutes)}`;
		}
	}

	private pad(value: number): string {
		return value.toString().padStart(2, '0');
	}
}
