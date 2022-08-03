import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getRegionCountries(region: string): Observable<Object> {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`)
  }

  getCountry(countryName: string): Observable<Object> {
    return this.http.get(`https://restcountries.com/v3.1/name/${countryName}`)
  }
}
