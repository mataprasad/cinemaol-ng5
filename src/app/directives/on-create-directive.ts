import { Directive, Output, EventEmitter ,Input} from '@angular/core';

@Directive({ selector: '[onCreate]' })
export class OnCreate {
    
  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {      
     this.onCreate.emit(''); 
  } 
}