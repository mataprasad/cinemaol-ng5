import { Injectable } from '@angular/core';

export class ServiceBus{
  public IP:string;
}
@Injectable()
export class ServiceBusService extends ServiceBus {

  public IP:string;
  constructor() { 
   super();
  }

}
