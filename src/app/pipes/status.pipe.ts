import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any): any {
    if (value ==false){
      return "review"
    }
    else{
      return "approved"
    }
  }

}
