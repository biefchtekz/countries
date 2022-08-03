import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country: any
  currency = ''
  Object = Object;

  constructor(
    private route: ActivatedRoute,
    private getCountry: DatabaseService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.getCountry.getCountry(param['country']).subscribe(obs => {
        // @ts-ignore
        this.country = obs[0]
        this.getCurrencyName()
      })
    })
  }

  getCurrencyName() {
    let bb = JSON.stringify(Object.values(this.country.currencies))
    bb = bb.replace('[', '')
    bb = bb.replace(']', '')
    this.currency = JSON.parse(bb).name
  }


}
