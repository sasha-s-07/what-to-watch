import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movie = true;
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMovieClick(){
    if(this.show === true){
      this.show = false;
    }
    //toggle 
    //this.movie = !this.movie;
    this.movie = true;  
  }

  onShowClick(){
    if(this.movie === true){
      this.movie = false;
    }
    //toggle
    //this.show = !this.show;
    this.show = true;
  }

}
