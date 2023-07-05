import {Pipe, PipeTransform} from '@angular/core';
import {Country} from "../interfaces/interfaces";

@Pipe({
  name: 'searchCountry'
})
export class SearchPipe implements PipeTransform {

  transform(countries: Country[], search = ''): Country[] {
    if (!search.trim()) return countries
    return countries.filter(country => {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    })
  }

}
