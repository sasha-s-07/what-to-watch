import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ShowsService } from '../shows.service';
import { Country } from '../country';
import { Language } from "../language";
import { Genre } from "../genre";
import { Filter } from "../filter";

@Component({
  selector: 'app-shows-search-form',
  templateUrl: './shows-search-form.component.html',
  styleUrls: ['./shows-search-form.component.css']
})

export class ShowsSearchFormComponent implements OnInit {

  countries: Country[] = [];
  genres: Genre[] = [];
  languages: Language[] = [];
  years = ["2017","2018","2019","2020","2021"];

  //Data will be retrieved from the form submission
  //userModel: Filter = {genre: "", year: "", language: "", country: ""}; //Object
  filter: Filter = {};
  genre?: string = ""; 
  year?: string = "";
  language?: string = "";
  country?: string = "";

  constructor(private showsService: ShowsService, private router: Router) { }

  ngOnInit(): void {
    this.getShowsCountries();
    this.getShowsGenres();
    this.getShowsLanguages();
  }

  onSubmit() {
    //I was trying to parse values through object but it didn't work
    /*
    this.showsService.getTrendingShows(this.userModel)
      .subscribe(
        data => console.log("Success", data),
        error => console.log("Error", error)
        );
    */      
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

    console.log(this.filter);
    //this.router.navigate(['/movies-list'], { queryParams: this.filter });
  }

  getShowsCountries() : void {
    this.showsService.getShowsCountries().subscribe(countries => this.countries = countries);
  }

  getShowsGenres() : void {
    this.showsService.getShowsGenres().subscribe(genres => this.genres = genres);
  }

  getShowsLanguages() : void {
    this.showsService.getShowsLanguages().subscribe(languages => this.languages = languages);
  }

}
