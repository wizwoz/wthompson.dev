import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LizoxfordComponent } from './lizoxford/lizoxford.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LizoxfordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'liz', component: LizoxfordComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
