import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ExtraComponent } from './extra/extra.component';
import { Portafolio1Component } from './portafolio-1/portafolio-1.component';
import { Portafolio2Component } from './portafolio-2/portafolio-2.component';
import { Portafolio3Component } from './portafolio-3/portafolio-3.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { DetailsComponent } from './details/details.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PortafolioComponent,
    ReferencesComponent,
    ContactComponent,
    FooterComponent,
    ExtraComponent,
    Portafolio1Component,
    Portafolio2Component,
    Portafolio3Component,
    ModalComponent,
    ShopComponent,
    DetailsComponent,
    CartBadgeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
