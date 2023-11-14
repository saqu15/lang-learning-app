import { Component } from '@angular/core';

@Component({
	selector: 'app-test-component',
	templateUrl: './test-component.component.html',
	styleUrls: ['./test-component.component.sass'],
})
export class TestComponentComponent {
	test(): void {
		console.log('xd');

		for (let i = 0; i < 10; i++) {
			console.log('xd');
		}
	}
}
