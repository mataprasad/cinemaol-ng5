import { Component, OnInit } from '@angular/core';

import { ApiProxyPublic } from '../../services/api-proxy-public.service'

declare const $:any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public sliderMovies:any[];
  constructor(private apiPublic:ApiProxyPublic ) { }

  ngOnInit() {
    this.fnInitSlidderImages();  
  }

  canInitSlidder(y:boolean){
  
    if(y)
    {
      setTimeout(()=>{
       
        $("#accordion").fadeIn();
        $("#accordion").accordion({
          collapsible: true
        });
        $("#loader-div").fadeOut(); 
      },1000);
    }
 }

  private fnInitSlidderImages(){
    this.apiPublic.FillMovieSlider().then(
      resp => { 
        var data = resp.json(); 
        console.log(data);
        this.sliderMovies=data;
        
         
      },
      error => {
        console.error(error);
      }
    );
  }

}
