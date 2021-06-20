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
import { ShowsSearchFormComponent } from './shows-search-form/shows-search-form.component';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TvShowsDetailComponent } from './tv-shows-detail/tv-shows-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesSearchFormComponent,
    MoviesListComponent,
    SafeUrlPipe,
    MovieDetailComponent,
    ShowsSearchFormComponent,
    TvShowsListComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TvShowsDetailComponent
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
