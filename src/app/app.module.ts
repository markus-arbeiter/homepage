import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { PortfolioOverlayComponent } from './portfolio/portfolio-overlay/portfolio-overlay.component';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    SkillsComponent,
    AboutMeComponent,
    FooterComponent,
    ContactComponent,
    PortfolioComponent,
    PortfolioOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    IvyCarouselModule, 
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
