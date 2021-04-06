import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalAmount'
})
export class TotalAmountPipe implements PipeTransform {

  public ta:any;

  transform(value: any): any {
    this.ta=0

    for(let j of value.job){
      
      this.ta=this.ta+(j.hourly_rate*value.total_job_hours);
      console.log(this.ta);
      }

    for (let m of value.machine){

      this.ta=this.ta+(m.hourly_rent*value.total_machine_hours);
      console.log(this.ta)
    }


      return this.ta;
  }

}
