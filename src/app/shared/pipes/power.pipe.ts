import { Pipe, PipeTransform } from '@angular/core';

//  2 | power:3 ==> 2^3
// left | power: param1:param2:param3...

//deafult value (1)
// 5 | power:1 ==> 5^1 = 5

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
  // value : power: exponent
  transform(value: any, exponent:number = 1): any {
    return Math.pow(value,exponent);
  }

}
