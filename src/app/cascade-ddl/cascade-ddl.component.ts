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
import { ApiProxyPublic } from '../services/api-proxy-public.service'

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
  constructor(private http:Http,private apiPublic:ApiProxyPublic) { }

  ngOnInit() {
    this.movieList=[];
    this.dateList=[];
    this.timeList=[];



    this.myform = new FormGroup({
    
      movie: new FormControl("0"),
      date: new FormControl("0"),
      time: new FormControl("0")
  });
  
    this.apiPublic.FillMovieList().then(
      resp => { 
        this.movieList = resp.json().unshift({key:"--Select Movie --",value:"0"});
      },
      error => {
        console.error(error);
      }
    );
  }

  fnOnMovieChange(obj){
    this.apiPublic.FillDateList(obj).then(
      resp => { 
        this.dateList=resp.json().unshift({key:"--Select Date --",value:"0"});
      },
      error => {
        console.error(error);
      }
    );
  }

  fnOnDateChange(obj,dt){
 
    this.apiPublic.FillTimeList(obj,dt).then(
      resp => { 
        this.timeList=resp.json().unshift({key:"--Select Time --",value:"0"});
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