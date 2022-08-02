import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router'
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {RegionComponent} from "./components/region/region.component";
import {CountryComponent} from "./components/country/country.component";
import {AllRegionsComponent} from "./components/all-regions/all-regions.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', component: AllRegionsComponent},
      {path: 'region', component: RegionComponent},
      {path: 'country', component: CountryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
