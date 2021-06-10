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
  year:string = "";
  filter: string[] = [];
  movies: any;
  moviesImages : string [] = [];
  numPerCol : number = 4;
  numRows: number = 0;
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

  getTrendingMovies(): void{
    this.moviesService.getTrendingMovies(this.filter)
    .subscribe(
      movies => {
        this.movies = movies;
        this.getMovieImages();
        //this.displayMovies();
      });

  }

  getMovieImages():void{
    this.numRows = Math.ceil(this.movies.length/this.numPerCol);
    for (let i = 0;i < this.movies.length;i++) {
      this.moviesService.getMovieImages(String(this.movies[i].movie.ids.tmdb))
      .subscribe((images: any) => {
          this.moviesImages.push("https://image.tmdb.org/t/p/w300" + String(images.posters[0].file_path));
      });

    }
  }

  displayMovies():void{

    let main_elt = document.getElementById('main-content');
    console.log(main_elt);

    for (let i = 0; i < Math.ceil(this.movies.length/this.numPerCol); i++) {
      let row_div = document.createElement('div');
      row_div.className = 'row';
      for (let j = i * this.numPerCol; j < (i*this.numPerCol) + this.numPerCol; j++) {
        if(j < this.movies.length){
          let div = document.createElement('div');
          div.className = 'col-md-3';
          let fig = document.createElement('figure');
          let img = document.createElement('img');
          img.setAttribute('src',this.moviesImages[j]);
          img.setAttribute('alt',this.movies[j].movie.title + " poster");
          let caption = document.createElement('figcaption');
          caption.innerText = this.movies[j].movie.title;
          fig.appendChild(img);
          fig.appendChild(caption);
          div.appendChild(fig);
          row_div.appendChild(div);
        }

      }

    //document.getElementById('main-content').appendChild(row_div);

    }

  }

}
