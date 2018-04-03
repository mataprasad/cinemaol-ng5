import { Component, OnInit } from '@angular/core';

declare const $:any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#accordion").accordion({
      collapsible: true
      });
      $("#radio").buttonset();
  }

}
