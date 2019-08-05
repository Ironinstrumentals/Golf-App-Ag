import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noNameDupes'
})
export class NoNameDupesPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    value = '';
    alert('Name Already Used!');
    return value;
  }

}
