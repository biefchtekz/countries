import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  countries: any

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countryList: DatabaseService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.countryList.getRegionCountries(param['region']).subscribe(obs => {
        this.countries = obs
      })
    })
  }

  selectCountry(country: string) {
    this.router.navigate(['country'], {queryParams: {country}})
  }
}
