import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { WarcraftComponent } from './warcraft/warcraft.component';
import { SlidingCarouselComponent } from './sliding-carousel/sliding-carousel.component';
import { MenunavComponent } from './menunav/menunav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LiveComponent } from './live/live.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DownloadeComponent } from './downloade/downloade.component';
import { OverviewComponent } from './warcraft/WarcraftComponets/overview/overview.component';
import { CompareproductsComponent } from './warcraft/WarcraftComponets/compareproducts/compareproducts.component';
import { GamefeaturesComponent } from './warcraft/WarcraftComponets/gamefeatures/gamefeatures.component';
import { SystemReqComponent } from './warcraft/WarcraftComponets/system-req/system-req.component';
import { ProductdetailsComponent } from './warcraft/WarcraftComponets/productdetails/productdetails.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent,
  
    children: [
      { path: 'slider', component: SlidingCarouselComponent},
      { 
        path: 'live', 
        component: LiveComponent, 

      },
      { path: 'download', component: DownloadeComponent }
    ]
  },
  {
    path: 'warcraft',
    component: WarcraftComponent,
    children: [
      { path: 'warcraft', component: OverviewComponent },
      { path: 'compare-products', component: CompareproductsComponent },
      { path: 'game-features', component: GamefeaturesComponent },
      { path: 'system-requirements', component: SystemReqComponent },
      { path: 'product-list', component: ProductdetailsComponent }
    ]
  },
  { 
    path: 'pagenotfound', 
    component: PageNotFoundComponent 
  },
  {
    path: '**',
    redirectTo: '/pagenotfound'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
