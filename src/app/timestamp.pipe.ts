import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(value: number): string {
        var date = new Date(0);
        date.setSeconds(value); //Set date based on Seconds.
        return date.toISOString().substr(11, 8); //Get time segment of date.
  }

}
