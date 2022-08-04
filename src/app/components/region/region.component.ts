import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  searchStr = ''
  countries: any
  region: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countryList: DatabaseService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.region = param['region']
      this.countryList.getRegionCountries(param['region']).subscribe(obs => {
        this.countries = obs
      })
    })
  }

  selectCountry(country: string) {
    this.router.navigate(['country'], {queryParams: {country}})
  }
}
