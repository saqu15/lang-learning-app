import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './util/guards/auth.guard';
import { WordSetCreatorComponent } from './word-set-creator/word-set-creator.component';
import { LoginGuard } from './util/guards/login.guard';
import { BrowseSetsComponent } from './browse-sets/browse-sets.component';
import { WordsetDetailsComponent } from './wordset-details/wordset-details.component';
import { UserWordsetsComponent } from './user-wordsets/user-wordsets.component';
import { WordsetComponent } from './wordset/wordset.component';

const routes: Routes = [
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
	{
		path: 'user-wordsets',
		component: UserWordsetsComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'wordset',
		component: WordsetComponent,
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
