import { Component, OnInit } from '@angular/core';
import { Country } from "../country";
import { Language } from "../language";
import { Genre } from "../genre";
import { Filter } from "../filter";
import { MoviesService } from "../movies.service";
import { Router} from '@angular/router';

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

  years = ["2017","2018","2019","2020","2021"];

  genres:Genre[] = [];
  languages:Language[] = [];
  countries: Country[] = [];
  filter: Filter = {};
  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.getMoviesCountries();
    this.getMoviesGenres();
    this.getMoviesLanguages();
  }
  /* handle the search form submission */
  onSubmit() {
    this.filter = {};// clear the filter
    //console.log(this.genre,this.language,this.country,this.year);
    // add filter params
    if(this.genre){
      this.filter.genre = this.genre;
    }
    if(this.year){
      this.filter.year = this.year;
    }
    if(this.language){
      this.filter.language = this.language;
    }
    if(this.country){
      this.filter.country = this.country;
    }

    //console.log(this.filter);
    //location.href = this.moviesListUrl;
    this.router.navigate(['/movies-list'], { queryParams: this.filter });
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
