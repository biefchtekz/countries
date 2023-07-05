import {Pipe, PipeTransform} from '@angular/core';
import {Country} from "../interfaces/interfaces";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  transform(array: any): any[] {
    if (!Array.isArray(array)) {
      // @ts-ignore
      return;
    }
    for (let i of array) {
      if (i.name.common === "Russia") {
        array.splice(array.indexOf(i), 1)
      }
    }

    array.sort((a: Country, b: Country) => {
      if (a.name.common < b.name.common) {
        return -1;
      } else if (a.name.common > b.name.common) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
