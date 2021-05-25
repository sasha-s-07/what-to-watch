import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from "../movies.service";


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  filter: string[] = [];
  movies: any;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService,private location: Location) { }

  ngOnInit(): void {
    this.getParams();
    this.getTrendingMovies();
    //console.log(this.movies);
  }
  goBack(): void {
    this.location.back();
  }
 /* retrieve parameters on the url */
  getParams(): void{
    this.filter = [] // clear the filter
    this.route.queryParams.subscribe(params => {
      if(params['genre']){this.filter.push('genres=' + params['genre'])}
      if(params['year']){this.filter.push('years=' + params['year'])}
      if(params['language']){this.filter.push('languages=' + params['language'])}
      if(params['country']){this.filter.push('countries=' + params['country'])}

      //console.log(this.filter);

    });
  }

  getTrendingMovies(): void{
    this.moviesService.getTrendingMovies(this.filter)
    .subscribe(movies => this.movies = movies);

  }

}
