
import { NgModule,NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { WarcraftComponent } from './warcraft/warcraft.component';
import { SlidingCarouselComponent } from './sliding-carousel/sliding-carousel.component';
import { LiveComponent } from './live/live.component';
import { DownloadeComponent } from './downloade/downloade.component';
import { FooterComponent } from './footer/footer.component';
import { MenunavComponent } from './menunav/menunav.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { OverviewComponent } from './warcraft/WarcraftComponets/overview/overview.component';
import { CompareproductsComponent } from './warcraft/WarcraftComponets/compareproducts/compareproducts.component';
import { GamefeaturesComponent } from './warcraft/WarcraftComponets/gamefeatures/gamefeatures.component';
import { SystemReqComponent } from './warcraft/WarcraftComponets/system-req/system-req.component';
import { ProductdetailsComponent } from './warcraft/WarcraftComponets/productdetails/productdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    MenuBarComponent,
    WarcraftComponent,
    SlidingCarouselComponent,
    LiveComponent,
    DownloadeComponent,
    FooterComponent,
    MenunavComponent,
    VideoPlayerComponent,
    PageNotFoundComponent,
    BreadcrumbComponent,
    OverviewComponent,
    CompareproductsComponent,
    GamefeaturesComponent,
    SystemReqComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
