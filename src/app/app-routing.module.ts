import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './util/guards/auth.guard';
import { WordSetCreatorComponent } from './word-set-creator/word-set-creator.component';
import { LoginGuard } from './util/guards/login.guard';
import { BrowseSetsComponent } from './browse-sets/browse-sets.component';
import { WordsetDetailsComponent } from './wordset-details/wordset-details.component';

const routes: Routes = [
	{
		path: 'test',
		component: TestComponentComponent,
		canActivate: [AuthGuard],
	},
	{ path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
	{
		path: 'create-set',
		component: WordSetCreatorComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'browse-sets',
		component: BrowseSetsComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'wordset-details/:id',
		component: WordsetDetailsComponent,
		canActivate: [AuthGuard],
	},
	{ path: '', component: AppComponent, canActivate: [AuthGuard] },
	{ path: '*', component: AppComponent, canActivate: [AuthGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
