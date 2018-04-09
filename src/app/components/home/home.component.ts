import { Component,NgZone, OnInit, OnChanges, SimpleChanges, Inject,Input,Output,ViewChild,
  AfterViewInit,ElementRef ,EventEmitter } from '@angular/core';

import { GlobalConfig } from '../../app.global.config';
import { ServiceBus } from '../../services/service-bus.service';
import { ApiProxyPublic } from '../../services/api-proxy-public.service'
import { environment } from '../../../environments/environment';

declare const $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  


  canInitSlidder(y:boolean){
    
    if(y)
    {
      this.initSlider();
    }
 }

  public IP:string;
  public Url:string;
  public name:string;
  public sliderMovies:any[];
  constructor(private zone:NgZone,private config:GlobalConfig,private serviceBus:ServiceBus,private apiPublic:ApiProxyPublic ) { }


  ngOnInit() {
    this.Url=this.config.ApiBaseUrl;
    this.IP=this.serviceBus.IP;
    this.serviceBus.change.subscribe(updated => {
      this.IP=this.serviceBus.IP;
    });
    this.fnInitSlidderImages();
    this.name = environment.name;
  }

  private fnInitSlidderImages(){
    this.apiPublic.FillMovieSlider().then(
      resp => { 
        var data = resp.json();
        console.log(data);
        this.sliderMovies=data;
        //this.initSlider();
      },
      error => {
        console.error(error);
      }
    );
  }

  private initSlider(){
    var $panel = $(".panel");
    var $container = $panel.find(".container");

    $container.wtRotator({
        width: 620,
        height: 300,
        thumb_width: 24,
        thumb_height: 24,
        button_width: 24,
        button_height: 24,
        button_margin: 5,
        auto_start: true,
        delay: 3000,
        transition: "fade",
        transition_speed: 800,
        block_size: 75,
        vert_size: 55,
        horz_size: 50,
        cpanel_align: "BR",
        timer_align: "top",
        display_thumbs: false,
        display_dbuttons: false,
        display_playbutton: false,
        display_thumbimg: false,
        display_side_buttons: false,
        tooltip_type: "",
        display_numbers: false,
        display_timer: false,
        mouseover_pause: true,
        cpanel_mouseover: false,
        text_mouseover: false,
        text_effect: "fade",
        text_sync: true,
        shuffle: true,
        block_delay: 25,
        vstripe_delay: 73,
        hstripe_delay: 183
    });
  }

}
