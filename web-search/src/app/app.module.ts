import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgAisModule } from 'angular-instantsearch';
import { RouterModule } from '@angular/router';


import { MainComponent } from './main/main.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LyricsComponent,
    DashboardComponent,
  ],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
