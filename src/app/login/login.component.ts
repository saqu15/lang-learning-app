import { Component, OnInit, inject } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;

	private fb = inject(FormBuilder);

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			login: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
		});
	}
}
