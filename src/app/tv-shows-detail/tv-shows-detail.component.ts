import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShowsService} from "../shows.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-tv-shows-detail',
  templateUrl: './tv-shows-detail.component.html',
  styleUrls: ['./tv-shows-detail.component.css']
})
export class TvShowsDetailComponent implements OnInit {
show: any;

  constructor(private route: ActivatedRoute, private showsService: ShowsService,private location: Location) { }

  ngOnInit(): void {
    this.getShow();
  }

  goBack(): void {
    this.location.back();
  }

  getShow(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.showsService.getShow(id)
      .subscribe(show => this.show = show);
  }

}
