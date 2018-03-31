import { Injectable ,Output, EventEmitter} from '@angular/core';

export class ServiceBus{
  public IP:string;
  change: EventEmitter<boolean>;
}
@Injectable()
export class ServiceBusService extends ServiceBus {

  private _IP:string;
  get IP():string{
    return this._IP;
  }
  set IP(val:string){
     this._IP=val;
     this.change.emit(true);
  }
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor() { 
   super();
  }

}
