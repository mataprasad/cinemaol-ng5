import { Component, OnInit } from '@angular/core';

import { GlobalConfig } from '../../app.global.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Url:string;
  constructor(private config :GlobalConfig) { }

  ngOnInit() {
    this.Url=this.config.ApiBaseUrl;
  }

}
