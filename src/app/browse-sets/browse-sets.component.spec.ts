import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseSetsComponent } from './browse-sets.component';

describe('BrowseSetsComponent', () => {
	let component: BrowseSetsComponent;
	let fixture: ComponentFixture<BrowseSetsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [BrowseSetsComponent],
		});
		fixture = TestBed.createComponent(BrowseSetsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
