import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-cascade-ddl',
  templateUrl: './cascade-ddl.component.html',
  styleUrls: ['./cascade-ddl.component.css']
})
export class CascadeDdlComponent implements OnInit {

  movieList:Object[];
  dateList:Object[];
  timeList:Object[];
  myform: FormGroup;
  constructor(private http:Http) { }

  ngOnInit() {
    this.movieList=[];
    this.dateList=[];
    this.timeList=[];



    this.myform = new FormGroup({
    
      movie: new FormControl("0"),
      date: new FormControl("0"),
      time: new FormControl("0")
  });
  
    this.http.get("http://localhost:5000/Service/FillMovieist").subscribe(
      resp => { 
        this.movieList=resp.json();
      },
      error => {
        console.error(error);
      }
    );
  }

  fnOnMovieChange(obj){

    this.http.post("http://localhost:5000/Service/FillDateList",{ pMovieTitle:obj}).subscribe(
      resp => { 
        this.dateList=resp.json();
      },
      error => {
        console.error(error);
      }
    );
  }

  fnOnDateChange(obj,dt){
 
    this.http.post("http://localhost:5000/Service/FillTimeList",{ pMovieTitle:obj,pMovieDate:dt}).subscribe(
      resp => { 
        this.timeList=resp.json();
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmit(){
    console.log(this.myform.value);
  }
}