import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { NavComponent } from './layout-elements/nav/nav.component';
import { MainComponent } from './layout-elements/main/main.component';
import { HeaderComponent } from './layout-elements/header/header.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { LoginComponent } from './login/login.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { WordSetCreatorComponent } from './word-set-creator/word-set-creator.component';
import { DropdownModule } from 'primeng/dropdown';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		MainComponent,
		HeaderComponent,
		TestComponentComponent,
		LoginComponent,
		WordSetCreatorComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ButtonModule,
		MenuModule,
		ToastModule,
		MenubarModule,
		CardModule,
		FormsModule,
		ReactiveFormsModule,
		InputTextModule,
		PasswordModule,
		DropdownModule,
		StyleClassModule,
		DividerModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
