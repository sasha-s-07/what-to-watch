import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getParams();
    this.getTrendingMovies();
    //console.log(this.movies);
  }

 /* retrieve parameters on the url */
  getParams(): void{
    this.filter = [] // clear the filter
    this.route.queryParams.subscribe(params => {
      if(params['genre']){this.filter.push('genre=' + params['genre'])}
      if(params['year']){this.filter.push('year=' + params['year'])}
      if(params['language']){this.filter.push('language=' + params['language'])}
      if(params['country']){this.filter.push('country=' + params['country'])}

      //console.log(this.filter);

    });
  }

  getTrendingMovies(): void{
    this.moviesService.getTrendingMovies(this.filter)
    .subscribe(movies => this.movies = movies);

  }

}
