import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noNameDupes'
})
export class NoNameDupesPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value) {
      let returnval: string = value;
      // @ts-ignore
      if (value == document.getElementById('plr1_name').value) {
        // @ts-ignore
        if (value == document.getElementById('plr2_name').value) {
          returnval = value + '+';
          // @ts-ignore
        } else if (value == document.getElementById('plr3_name').value) {
          returnval = value + '+';
          // @ts-ignore
        } else if (value == document.getElementById('plr4_name').value) {
          returnval = value + '+';
        }
      } else
      // @ts-ignore
      if (value == document.getElementById('plr2_name').value) {
        // @ts-ignore
        if (value == document.getElementById('plr1_name').value) {
          returnval = value + '+';

          // @ts-ignore
        } else if (value == document.getElementById('plr3_name').value) {
          returnval = value + '+';
          // @ts-ignore
        } else if (value == document.getElementById('plr4_name').value) {

        }
      } else
      // @ts-ignore
      if (value == document.getElementById('plr3_name').value) {
        // @ts-ignore
        if (value == document.getElementById('plr1_name').value) {
          returnval = value + '+';
          // @ts-ignore
        } else if (value == document.getElementById('plr2_name').value) {
          returnval = value + '+';
          // @ts-ignore
        } else if (value == document.getElementById('plr4_name').value) {
          returnval = value + '+';
        }
      } else
      // @ts-ignore
      if (value == document.getElementById('plr4_name').value) {
        // @ts-ignore
        if (value == document.getElementById('plr1_name').value) {
          returnval = value + '+';
          // @ts-ignore
        } else if (value == document.getElementById('plr2_name').value) {
          returnval = value + '+';
          // @ts-ignore
        } else if (value == document.getElementById('plr3_name').value) {
          returnval = value + '+';
        }
      }

      return returnval;

    }
  }

}
