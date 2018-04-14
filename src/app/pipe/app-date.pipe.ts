import { Pipe, PipeTransform } from '@angular/core';

declare const moment:any;

@Pipe({
  name: 'appDate'
})
export class AppDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var dateString = moment(new Date(value))
    .add( 330 , "minutes" )
    .format('DD-MM-YYYY');
    return dateString;
  }

}
