import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {FormsModule} from "@angular/forms";
import { PrixcroissantPipe } from './prixcroissant.pipe';
import { PrixdecroissantPipe } from './prixdecroissant.pipe';
import { TriProduitsPipe } from './tri-produits.pipe';
import { AproposComponent } from './apropos/apropos.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductDetailComponent,
    PrixcroissantPipe,
    PrixdecroissantPipe,
    TriProduitsPipe,
    AproposComponent,
    PanierComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [PanierComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
