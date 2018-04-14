import { Pipe, PipeTransform } from '@angular/core';

declare const moment:any;

@Pipe({
  name: 'appDateCustom'
})
export class AppDateCustomPipe implements PipeTransform {

  transform(value: any, minutesToAdd: any=330,format: string="DD-MM-YYYY"): any {
    var dateString = moment(new Date(value))
    .add(minutesToAdd , "minutes" )
    .format(format);
    return dateString;
  }

}
