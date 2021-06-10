import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ShowsService } from "../shows.service";
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.css']
})
export class TvShowsListComponent implements OnInit {

  year:string = "";
  filter: string[] = [];
  tvshows: any;
  constructor(private route: ActivatedRoute, private showsService: ShowsService,private location: Location) { }

  ngOnInit(): void {
    this.getParams();
    this.getTrendingShows();
    //console.log(this.movies);
  }
  goBack(): void {
    this.location.back();
  }
  /* retrieve parameters on the url */
  getParams(): void{
    this.filter = [] // clear the filter
    this.route.queryParams.subscribe(params => {
      if(params['genre']){
        this.filter.push('genres=' + params['genre']);
      }
      if(params['year']){
        this.filter.push('years=' + params['year']);
        this.year = params['year'];
      }
      if(params['language']){
        this.filter.push('languages=' + params['language']);
      }
      if(params['country']){
        this.filter.push('countries=' + params['country']);
      }

      //console.log(this.filter);

    });
  }

  getTrendingShows(): void{
    this.showsService.getTrendingShows(this.filter)
      .subscribe(tvshows => this.tvshows = tvshows);

  }
}
