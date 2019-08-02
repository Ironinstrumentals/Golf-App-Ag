import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noNameDupes'
})
export class NoNameDupesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
