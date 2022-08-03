import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-regions',
  templateUrl: './all-regions.component.html',
  styleUrls: ['./all-regions.component.scss']
})
export class AllRegionsComponent{

  constructor(
    private router: Router
  ) {}

  selectRegion(region: string) {
    this.router.navigate(['region'], {queryParams: {region}})
  }
}
