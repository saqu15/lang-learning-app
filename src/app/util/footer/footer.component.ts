import {
	AfterViewInit,
	Component,
	ElementRef,
	Renderer2,
	ViewChild,
	inject,
} from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements AfterViewInit {
	@ViewChild('footer')
	footer!: ElementRef;

	@ViewChild('footerSpace')
	footerSpace!: ElementRef;

	private renderer = inject(Renderer2);

	ngAfterViewInit(): void {
		this.renderer.setStyle(
			this.footerSpace.nativeElement,
			'height',
			`${this.footer.nativeElement.offsetHeight}px`
		);
	}
}
