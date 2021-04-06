import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalTime'
})
export class TotalTimePipe implements PipeTransform {

  public tt:any;

  transform(value: any): any {
    
    this.tt=value.total_job_hours+value.total_machine_hours;
    return this.tt

  }

}
