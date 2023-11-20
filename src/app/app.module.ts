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

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		MainComponent,
		HeaderComponent,
		TestComponentComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ButtonModule,
		MenuModule,
		ToastModule,
		MenubarModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
