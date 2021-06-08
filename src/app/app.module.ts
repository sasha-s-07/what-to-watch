import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesSearchFormComponent } from './movies-search-form/movies-search-form.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ShowsSearchFormComponent } from './shows-search-form/shows-search-form.component';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesSearchFormComponent,
    MoviesListComponent,
    SafeUrlPipe,
    MovieDetailComponent,
    ShowsSearchFormComponent,
    TvShowsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
