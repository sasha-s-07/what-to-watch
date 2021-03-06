import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoviesSearchFormComponent } from './movies-search-form/movies-search-form.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ShowsSearchFormComponent } from './shows-search-form/shows-search-form.component';
import {TvShowsListComponent} from "./tv-shows-list/tv-shows-list.component";
import {TvShowsDetailComponent} from "./tv-shows-detail/tv-shows-detail.component";

const routes: Routes = [
  { path: 'movies-search', component: MoviesSearchFormComponent},
  { path: 'movies-list', component: MoviesListComponent},
  { path: 'movie-detail/:id', component: MovieDetailComponent},
  { path: 'home', component:HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'shows-search', component: ShowsSearchFormComponent },
  { path:'tv-shows-list', component: TvShowsListComponent},
  { path:'tv-shows-detail/:id', component: TvShowsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
