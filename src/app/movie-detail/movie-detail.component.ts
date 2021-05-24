import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from "../movies.service";


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
 movie: any;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService,private location: Location) { }

  ngOnInit(): void {
    this.getMovie();
  }

  goBack(): void {
    this.location.back();
  }

  getMovie(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.moviesService.getMovie(id)
    .subscribe(movie => this.movie = movie);
  }

}
