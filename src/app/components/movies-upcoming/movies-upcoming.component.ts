import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

declare const $:any;

@Component({
  selector: 'app-movies-upcoming',
  templateUrl: './movies-upcoming.component.html',
  styleUrls: ['./movies-upcoming.component.css']
})
export class MoviesUpcomingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $("#accordion").accordion({
      collapsible: true
    });
    $("#radio").buttonset();
  }

}
