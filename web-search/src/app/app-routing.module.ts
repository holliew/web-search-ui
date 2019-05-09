import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
{ path: '', redirectTo: '/main', pathMatch: 'full' },
{ path: 'main', component: MainComponent },
{ path: 'lyrics', component: LyricsComponent },
{ path: 'dashboard', component: DashboardComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
