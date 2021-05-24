import { Component, OnInit } from '@angular/core';
import { Country } from "../country";
import { Language } from "../language";
import { Genre } from "../genre";
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-movies-search-form',
  templateUrl: './movies-search-form.component.html',
  styleUrls: ['./movies-search-form.component.css']
})
export class MoviesSearchFormComponent implements OnInit {
  genre?: string = ""; // movie Genre
  year?: string = ""; // movie Year
  language?: string = ""; // movie language
  country?: string = ""; // movie country
  moviesListUrl: string = '';

  years = ["2018","2019","2020","2021"];

  genres:Genre[] = [];
  languages:Language[] = [];
  countries: Country[] = [];
  searchParams: string[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMoviesCountries();
    this.getMoviesGenres();
    this.getMoviesLanguages();
  }
  /* handle the search form submission */
  onSubmit() {
    this.moviesListUrl = './movies-list?';
    this.searchParams = [];
    //console.log(this.genre,this.language,this.country,this.year);
    // add filter params to the url
    if(this.genre){
      this.searchParams.push('genre=' + this.genre);
    }
    if(this.year){
      this.searchParams.push('year=' + this.year);
    }
    if(this.language){
      this.searchParams.push('language=' + this.language);
    }
    if(this.country){
      this.searchParams.push('country=' + this.country);
    }
    //add params to the style
    this.moviesListUrl += this.searchParams.join('&');
    //console.log(this.searchParams, this.moviesListUrl);
    location.href = this.moviesListUrl;
   }

  getMoviesCountries(): void {
   this.moviesService.getMoviesCountries()
   .subscribe(countries => this.countries = countries);
 }

 getMoviesLanguages(): void {
  this.moviesService.getMoviesLanguages()
  .subscribe(languages => this.languages = languages);
}

getMoviesGenres(): void {
 this.moviesService.getMoviesGenres()
 .subscribe(genres => this.genres = genres);
}

}
