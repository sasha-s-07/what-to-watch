import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesSearchFormComponent } from './movies-search-form/movies-search-form.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MoviesSearchFormComponent,
    MoviesListComponent,
    SafeUrlPipe,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
