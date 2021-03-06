import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import * as fromHome from './home';
import * as fromMarketplace from './marketplace';
import * as fromBicycle from './bicycle';

import { AuthGuard } from '../auth.guard';
import { SearchPipe } from './search.pipe';
import { BicycleShowComponent } from './bicycle/bicycle-show/bicycle-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromHome.components,
    ...fromMarketplace.components,
    ...fromBicycle.components,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [AuthGuard, SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
