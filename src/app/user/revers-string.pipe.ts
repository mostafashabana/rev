import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversString'
})
export class ReversStringPipe implements PipeTransform {

  transform(value: string ): unknown {
    return value.split("").reverse().join("") ;
  }

}
